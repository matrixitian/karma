const express = require('express')
const router = new express.Router()
const User = require('../../models/user')
const log = console.log

router.post('/recover-account', async (req, res) => {
    log(req.body)
    log("hello")
    try {
        const user = await User.findByRecoveryKey(req.body.username, req.body.recoveryKey)
       
        const token = await user.generateAuthToken()
       
        res.status(200).send({ user, token })
    } catch(err) {
        res.status(400).send() 
    }
})

module.exports = router