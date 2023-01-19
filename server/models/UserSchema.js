const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email:
    {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    totalscore: {
        type: Number,
    }
})

//collection:-Register
const Register = new mongoose.model("UserInfo", UserSchema)
module.exports = Register;