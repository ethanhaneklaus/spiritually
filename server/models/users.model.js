const query = require("../config/database.config");
const bcrypt = require("bcrypt");

async function register(username, password) {
    try {
        const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
            username,
        ]);
        //! Ensure username is unique: if user exists that name is already being used
        if (user) {
            return { success: false, data: null, error: "Username already taken" };
        }

        //! Hash password
        const hashed = await bcrypt.hash(password, 10);

        //! Add it to the database
        await query("INSERT INTO users (password, username) VALUES (?,?)", [
            hashed,
            username,
        ]);

        //! Return info about things
        return { success: true, data: "Successfully registered!", error: null };
    } catch (err) {
        return { success: false, data: null, error: "Something went wrong." };
    }
}

async function login(username, password) {
    try {
        const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
            username,
        ]);
        //! Ensure user with that name exists
        if (!user) {
            return { success: false, data: null, error: "Username invalid" };
        }
        //! Compare plain text to hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return { success: false, data: null, error: "Password invalid" };
        }
        //! Return info about things
        return {
            success: true,
            data: { username: user.username, id: user.id },
            error: null,
        };
    } catch (err) {
        return { success: false, data: null, error: "Something went wrong." };
    }
}

module.exports.login = login;
module.exports.register = register;
