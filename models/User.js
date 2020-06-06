const mongoose = require('mongoose');

var User = mongoose.model('User',{
    username : { type : String },
    password : { type : String },
    firstname : { type : String },
    lastname: { type: String },
    emailID : { type : String },
    phoneNumber : { type: Number },
    role : { type : Number }
});

module.exports = { User };