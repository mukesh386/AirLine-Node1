const express = require('express');
const {serverConfig ,logger}  = require('./config')
const { router } = require('./routers/v1/index.js');

const app = express()
app.use('/' ,router)
app.listen(serverConfig.PORT,() => {
    console.log(`server is ready on port ${serverConfig.PORT}`);
    logger.info("succces fully stated server ")
})