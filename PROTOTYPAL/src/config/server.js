require('dotenv').config()

// EXPRESS SERVER
    const express = require('express')
    const server = express()

// MIDDLEWARE
    const cors = require('cors')

// USE MIDDLEWARE
    server.use(
        express.json(),
        cors(),
        // -*- //
        express.status('public')
    )

// ROOT ROUTE

// EXPORTS
module.exports = server