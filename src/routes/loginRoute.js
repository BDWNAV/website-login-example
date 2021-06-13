const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema");

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    let userData = await userSchema.findOne({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    if(userData) {
        res.redirect(`/user/${userData._id}`);
    } else {
        res.send("There was no Data")
    }
});

module.exports = router;