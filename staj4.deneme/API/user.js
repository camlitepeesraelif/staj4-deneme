const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const router = express.Router();
const db=require('../db.json')

router.get('/', async(req,res)=>{
  try{
    const db=await User.find()

    res.json(db)
  }catch(e){
    console.log(e)
    res.status(400).json({message:'error'})
  }
})
module.exports = router;