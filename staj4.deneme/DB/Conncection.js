const mongoose = require('mongoose');

const URI ="mongodb+srv://esraelif:1234@stajdeneme.5smrz.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {

  try {

    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

  }catch (e) {
    console.log(`Mongodb connect error`, e)
  }
};

module.exports = connectDB;