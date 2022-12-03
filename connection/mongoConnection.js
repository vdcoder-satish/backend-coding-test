/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose=require('mongoose');
const conurl=process.env.CON_URL;
const getConnection=()=>{
    mongoose.connect(conurl,{
        useNewUrlParser:true,
        useUnifiedTopology:true 
    },(err)=>{
        if(err){
            console.log('error in connection');
        }else{
            console.log('connection done successfully');
        }
    })
}
module.exports={
    getConnection
};