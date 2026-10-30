const {createLogger , format ,transports}  = require('winston');
const winston = require('winston/lib/winston/config');
const {combine, level ,timestamp ,printf ,label} = format;

const customFormat = printf(({ level ,label ,timestamp ,message}) => {
    return ` ${level} : ${label} : ${timestamp} :${message}`
})

const logger = createLogger({
    format:combine(
        timestamp({format:"YYYY-MM-DD HH:MM:ss"}),
        customFormat

    ),
    transports:[
       // new transports.console(),
        new transports.File({filename:"combine.logger"})
    ]
})

module.exports =logger;