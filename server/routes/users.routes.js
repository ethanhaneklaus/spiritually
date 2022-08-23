const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.middleware");
const router = express.Router();
const { register, login } = require("../models/users.model");

router.get("/verify", auth, (req, res) => {
    return res.send({
        success: true,
        data: { username: req.user.username, id: req.user.id },
        error: null
    });
});

router.get("/logout", (req, res) => {
    res.clearCookie("jwt");

    return res.send({ success: true, data: null, error: null })
})

//! login - POST
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!verifyData(username, password)) {
        return res.send({
            success: false,
            data: null,
            error: "Invalid data provided",
        });
    }
    //! Data fits requirements
    const resObj = await login(username, password);
    if (resObj.success) {
        const user = resObj.data;
        //TODO Sign a jwt that expires in 2 days with that user obj
        const token = jwt.sign(user, process.env.SECERT_KEY, {
            expiresIn: "2 days",
        });
        //TODO Add the jwt to an httpOnly cookie called "jwt"
        res.cookie("jwt", token, { httpOnly: true })

    }

    res.send(resObj);
});

//! register - PUT
router.put("/register", async (req, res) => {
    const { username, password } = req.body;
    if (!verifyData(username, password)) {
        return res.send({
            success: false,
            data: null,
            error: "Invalid data provided",
        });
    }
    //! Data fits requirements
    const resObj = await register(username, password);

    res.send(resObj);
});

function verifyData(username, password) {
    //! Username (4-20)
    if (!username || username.length < 4 || username.length > 20) {
        return false;
    }
    //! Password (8-30)
    if (!password || password.length < 8 || password.length > 30) {
        return false;
    }
    return true;
}

module.exports = router;