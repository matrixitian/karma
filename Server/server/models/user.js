const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const generate = require('../../config/functions/generate')
const log = console.log

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    emailOrPhoneNum: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value) &&
            !validator.isMobilePhone(value)) {
                throw new Error('Email or phone number is invalid.')
            }
        } 
    },
    password: {
        type: String,
        minlength: 7,
        trim: true,
        required: true,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id.toString()}, process.env.SECRET)
    user.tokens = user.tokens.concat({ token })

    await user.save()
    return token
}

// define findByCredentials func
userSchema.statics.findByCredentials = async (emailOrPhoneNum, password) => {
    const user = await User.findOne({ emailOrPhoneNum })

    let isMatch
    if (!user) {
        throw new Error('Unable to login.')
    } else {
        isMatch = await bcrypt.compare(password, user.password)
    }

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

userSchema.statics.generateUsername = async(name) => {
    const key = generate('random_username_string')

    let generatedUsername = `${name}.${key}`.toLowerCase()
    let countTracker = 0

    const Count = ((count) => {
        if (count >= 1) {
            count++
            countTracker += count
        }
    })

    const count = await User.countDocuments({
        username: { $regex: new RegExp(generatedUsername) }
    })

    Count(count)

    if (countTracker === 0) {
        generatedUsername = `${name}.${key}`.toLowerCase()
    } else {
        generatedUsername = `${name}.${key}.${countTracker}`.toLowerCase()
    }

    return generatedUsername
}

userSchema.pre('save', async function(next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User