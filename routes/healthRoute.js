/* eslint-disable no-undef */
const express=require('express');
const router=express.Router();
const healthController=require('../controller/healthController');



router.post('/addHealth',healthController.addHealth);
router.post('/health',healthController.getHealth);
module.exports=router;