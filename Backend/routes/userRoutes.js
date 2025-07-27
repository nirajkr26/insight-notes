const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const user = require('../models/user')
const userValidator = require('../validators/userValidator')

router.post('/register', async (req, res) => {
    const userData = req.body;
    const validation = userValidator.safeParse(userData);
    if (validation.success) {
        const { name, email, password } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({ name, email, password: hashedPassword })
        await newUser.save()
        res.send('User registered successfully')
        console.log("registered");
    } else {
        res.status(400).json({ error: validation.error})
        console.log("invalid", validation.error.errors);
    }
})

router.post('/login', async (req, res) => {
    const userData = req.body
    const foundUser = await user.findOne({ email: userData.email })

    if (foundUser) {
        if (await bcrypt.compare(userData.password, foundUser.password)) {
            res.json({ message: 'Login successful', userId: foundUser._id });
        } else {
            res.status(400).send('Invalid password')
        }
    } else {
        res.status(400).send('Invalid email')
        console.log("eroor");
    }
})

router.post("/delete/account", async(req, res) => {
    
    const userData = req.body;
    const foundUser = await user.findOne({ email: userData.email });
    if (foundUser) {
        await user.deleteOne({ email: userData.email });
        res.json({ message: "Account deleted successfully" });
    } else {
        res.status(400).send("Invalid email");
    }
})

module.exports = router;