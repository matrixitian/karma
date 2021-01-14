const express = require('express')
const router = new express.Router()
const User = require('../../models/user')
const log = console.log

// login all types of users
router.post('/login', async (req, res) => {
    log(req.body)
    try {
        const user = await User.findByCredentials(req.body.emailOrPhoneNum, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
    } catch(err) {
        console.log(err)
        res.status(400).send(err) 
    }
})

module.exports = router