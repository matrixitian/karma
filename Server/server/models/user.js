const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const log = console.log

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: false,
        trim: true
    },
    lname: {
        type: String,
        required: false,
        trim: true
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: false,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.')
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
userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({ username })

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

userSchema.statics.generateUsername = async(fname, lname) => {
    let generatedUsername = `${fname}.${lname}`.toLowerCase()
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
        generatedUsername = `${fname}.${lname}`.toLowerCase()
    } else {
        generatedUsername = `${fname}.${lname}.${countTracker}`.toLowerCase()
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