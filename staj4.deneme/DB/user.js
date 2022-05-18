const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Name: {type: String},
    SurName: {type: String}
});

module.exports = mongoose.model('User', schema);