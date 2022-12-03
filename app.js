/* eslint-disable no-undef */
const express=require('express');
const logger=require('./logger');
require('dotenv').config();
const app=express();
const port=process.env.PORT;
const bodyParser=require('body-parser');
const winston=require('winston');
const getConnection=require('./connection/mongoConnection');
app.listen(port,()=>{
    console.log('server started on port',port);
})
//logger info
logger.info('info');
logger.warn('warn');
logger.debug('debug');
logger.error('error');


//parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//getting connection
// eslint-disable-next-line no-unused-vars
const con=getConnection.getConnection();

//include route
const healthRoute=require('./routes/healthRoute');

//initialise route
app.use('/',healthRoute);
module.exports=app;