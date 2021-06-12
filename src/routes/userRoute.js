const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema");

router.get('/:id', async (req, res) => {
    let userData = await userSchema.findOne({ _id: req.params.id });
    
    res.send(`${userData.username}`);
});

module.exports = router;