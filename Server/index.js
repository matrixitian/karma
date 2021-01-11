require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./server/db/mongoose')

// Global
const register = require('./server/routers/global/register')
const login = require('./server/routers/global/login')
const recover_account = require('./server/routers/global/recover_account')
const logout = require('./server/routers/global/logout')
const logout_all = require('./server/routers/global/logout_all_devices')

const app = express()
const port = process.env.PORT || 3000

// Enables CORS
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}))

app.use(express.json())

// Global for Forms
app.use(register)
app.use(login)
app.use(recover_account)
app.use(logout)
app.use(logout_all)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})