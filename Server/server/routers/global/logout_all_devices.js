const express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')

//logout all
router.post('/logout-all', (req, res, next) => {
    auth(req, res, next)
}, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router