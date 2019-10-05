require('dotenv').config()

// EXPRESS SERVER
    const express = require('express')
    const server = express()

// MIDDLEWARE

// USE MIDDLEWARE
    server.use(
        express.json(),
        // -*- //
        express.static('public'),
        express.static('src'),
    )

// ROOT ROUTE

// EXPORTS
module.exports = server