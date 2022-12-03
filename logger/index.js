/* eslint-disable no-undef */
const mylogger=require('./mylogger');
let logger=null;
if (process.env.NODE_ENV !== 'production') {
 logger=mylogger();
  }
  module.exports=logger;