const express = require('express')
const router = new express.Router()
const User = require('../../models/user')
const capitalizeString = require('../../../config/functions/capitalizeString')
const log = console.log

router.post('/create-user', async (req, res) => {
    let userObject = req.body

    try {
        const generatedUsername = await User.generateUsername(userObject.name)
        
        userObject.username = generatedUsername

        const user = new User(userObject)
        let savedUserAccount
        
        savedUserAccount = await user.save() 
        log(savedUserAccount)

        const token = await user.generateAuthToken()
            
        return res.status(201).send({ savedUserAccount, token })
    } catch(err) {
        log(err)
        return res.status(400).send(err)
    }
})

module.exports = router