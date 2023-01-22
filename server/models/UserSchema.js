const mongoose = require('mongoose');

const ScorearrSchema=new mongoose.Schema({
    indiv_score:{
        type:Number
    }
})

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email:
    {
        type: String,
        // unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    totalscore: {
        type: Number,
    },
    score_arr:[ScorearrSchema]
})

//collection:-Register
const Register = new mongoose.model("UserInfo", UserSchema)
module.exports = Register;