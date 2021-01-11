const jwt = require('jsonwebtoken')
const User = require('../models/user')
const log = console.log

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        // const token = clientAuthToken
        log("server token: " + token)
        const decoded = jwt.verify(token, process.env.SECRET)
        
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
    } catch(err) {
        log(err)
    }
}