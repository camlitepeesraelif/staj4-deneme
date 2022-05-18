const fs = require('fs');

const express = require('express');
const path = require('path');
const app = express();

const connectDb = require('./DB/Conncection')

app.use(express.json({extended: true}))
  
app.use('/public', express.static(path.join(__dirname,'public')));

app.use('/', require('./API/user'))

const start = async () => {
  try {

    await connectDb()

    await app.listen(7070 ,()=>{
      console.log ('express app listening on port http://localhost:7070')
    })

  }catch (e) {
    console.log(`Error in server start`, e)
  }
}

start()