const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('./models/UserSchema')
app.use(express.json())
app.use(cors())

const mongoUrl = "mongodb+srv://Learning-In:coddinggujjus@cluster0.qtx9wb3.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to Cloud ")
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(5000, () => {
    console.log('Listening to port:5000')
  
})
//userinfo is the model name or collection name 
const User = mongoose.model("UserInfo");
//getting data back from cloud 

app.post("/register", async (req, res) => {
    //receiving from users 
    const { username, email, password, confirmpassword } = req.body
    console.log(req.body)
    try {
        const oldUser = await User.findOne({ email })
        if (oldUser) {
            //    return res.send({ error: "User exists" })
            console.log("user exists")
           return res.json(0)
        }
        else {
            //creating new user 
            if (password !== confirmpassword) 
            {
                console.log('No password match')
                // res.sendFile(__dirname+'/Nopassword.html')
            }
            else {
             await User.create({
                    username: username,
                    email: email,
                    password:password
                })
                console.log("New added")
               return res.json(1)
            }
        }
    }
    catch (err) { 
        res.send({ status: "error" })
    }
})

app.post("/",async (req,res)=>
    {
const {username,password}=req.body;
const user=await User.findOne({username});

if(!user)
{
    return res.json({error:"User do not exists"});
    console.log("User Do not exist")
}
else 
{
    if(user.password===password)
    {
    console.log("Authenticated")
    return res.json(1)
    }
    else 
    {console.log("Incorrect password ")
    return res.json({status:"password missmatch"})
    }
}


 })