const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema");

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', async (req, res) => {
    let userData = await userSchema.findOne({
        username: req.body.username,
        email: req.body.email
    });

    if(userData) {
        res.send("There is already user data for you");
    } else {
        const newUser = new userSchema({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save();
        res.redirect(`/user/${newUser._id}`);
    }
});

module.exports = router;