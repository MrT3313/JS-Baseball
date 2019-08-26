
const express = require('express');
const JS_Baseball_app = express()

// -- Port -- //
    const PORT = 8000

// -- Listening -- //
    JS_Baseball_app.listen(PORT, () => console.log(`JS_Baseball_app is listening on ${PORT}`))
    console.log('Hello World')

// -- Routes -- //
    JS_Baseball_app.get('/', (req, res) => {
        res.send('Hello World')
    })