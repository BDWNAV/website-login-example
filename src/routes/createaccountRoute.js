const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema");

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', async (req, res) => {
    let userData = await userSchema.findOne({
        username: req.body.username,

    });
    res.redirect(`/user/${newUser._id}`);
});

module.exports = router;