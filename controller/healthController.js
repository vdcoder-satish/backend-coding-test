/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const Health=require('../models/healthModel');
exports.addHealth=async(req,res)=>{
    try{
        const payload={
            name:req.body.name,
            type:req.body.type,
            status:req.body.status
        }
        const healthData=await Health.insertMany(payload);
        if(healthData){
            return res.status(200).json({message:'health added successfully',status:200,data:healthData});
    
        }
        else{
            return res.status(404).json({message:'something went wrong',status:404});
    
        }
    }catch(error){
        console.log(error);
    }
}

exports.getHealth=async(req,res)=>{
    try{
        const healthData=await Health.find();
        if(healthData){
            return res.status(200).json({message:'health added successfully',status:200,data:healthData});
    
        }
        else{
            return res.status(404).json({message:'something went wrong',status:404});
    
        }
    
    }catch(error){
        console.log(error);
    }
}