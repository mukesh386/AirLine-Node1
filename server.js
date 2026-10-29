const express = require('express');
const {PORT} = require('./config/index.js')

const app = express()
app.listen(PORT,() => {
    console.log(`server is ready on port ${PORT}`);
})