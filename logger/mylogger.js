/* eslint-disable no-undef */
const winston = require('winston');
const { format} = require('winston');
const { combine, timestamp, printf } = format;
const myFormat = printf(({ level, message,timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
  });
const mylogger=()=>{

    return winston.createLogger({
      level: 'debug',
      format: combine(format.colorize(),
        timestamp({format:'HH:mm:ss'}),
        myFormat
      ),
      defaultMeta: { service: 'user-service' },
      transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    });
}
module.exports=mylogger;