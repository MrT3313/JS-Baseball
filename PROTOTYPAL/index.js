require('dotenv').config()

const server = require('./server.js')

const PORT = process.env.PORT || 1455

server.listen(PORT, () => {
    console.log(`=== JS Baseball Server Listening ===`)
})