const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,'Please add the user name']
    },
    email: {
        type: String,
        required: [true,'Please add the user email address'],
        unique: [true,'Email addres already in use']
    },
    password:{
        type:String,
        required: [true,'Enter  a Password']
    }
},
{
    timestamps: true
}
);


module.exports = mongoose.model('User',userSchema);