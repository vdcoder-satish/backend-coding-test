/* eslint-disable no-undef */
const mongoose=require('mongoose');
const healthSchema=new mongoose.Schema({
    name:{
        type:String
    },
    type:{
        type:String
    },
    status:{
        type:Boolean
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Health',healthSchema);