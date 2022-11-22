const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:
    {
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    

})

//creating collection:- Register
const Register=new mongoose.model("Register",UserSchema)
module.exports=Register;