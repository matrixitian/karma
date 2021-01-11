express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')

router.post('/logout', (req, res, next) => {
    auth(req, res, next, accountType)
}, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch(err) {
        res.status(500).send()
    }
})

module.exports = router