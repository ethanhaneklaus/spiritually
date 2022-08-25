const express = require("express");
const router = express.Router();
const { add, remove, getByUser, getAll } = require("../models/favorites.model");
const auth = require("../middleware/auth.middleware");
const { FavoritesContext } = require("../../src/context/FavoritesContext");


router.put("/add", auth, async (req, res) => {
    const favorite = req.body;
    if (
        !favorite.user_id ||
        !favorite.id ||
        !favorite.quote ||
        !favorite.source ||
        !favorite.philosophy
    ) {
        return res.send({
            success: false,
            data: null,
            error: "Invalid data provided",
        });
    }
    const resObj = await add({ ...favorite, user_id: req.user.id });

    return res.send(resObj);
});


router.delete("/delete/:id", auth, async (req, res) => {
    const id = req.params.id;
    const resObj = await remove(id, req.user.id);

    return res.send(resObj);
});


router.get("/user", auth, async (req, res) => {
    const resObj = await getByUser(req.user.id);

    return res.send(resObj);
});


router.get("/all", async (req, res) => {
    const resObj = await getAll();

    return res.send(resObj);
});

module.exports = router;