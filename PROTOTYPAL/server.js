require('dotenv').config()

// EXPRESS SERVER
    const express = require('express')
    const server = express()

// MIDDLEWARE

// USE MIDDLEWARE
    server.use(
        express.json(),
        // -*- //
        express.static('src'),
        express.static('public'),
    )

// ROOT ROUTE
    // server.get('/', (req,res) => {
    //     res.send()
    // })

// EXPORTS
module.exports = server