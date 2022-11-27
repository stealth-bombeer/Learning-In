const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('./models/UserSchema')
const jwt = require("jsonwebtoken")
const JWT_SECRET = "ndsahbb%b34y1({}pl+dvf^^82##"
app.use(express.json())
app.use(cors())
const bcrypt = require('bcryptjs')

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
                // console.log(newuser)
                res.send({ status: "ok" })
            }
        }
    }
    catch (err) { // console.log('err')
        res.send({ status: "error" })
    }
})

app.post("/", async (req, res) => {
    const { username, password } = req.body;
    // console.log("before")
    // console.log(req.body)
    // // res.send("logjreu")
    // console.log("AFTER")
    // const user = await User.findOne({ username });
    // if (!user) {
    //     // return res.json({ error: "User Not found" });
    //     console.log("User Do Not Exist");
    // }
    // // if (await bcrypt.compare(password, user.password)) {
    // //     const token = jwt.sign({}, JWT_SECRET);

    // //     if (res.status(201)) {
    // //         return res.json({ status: "ok", data: token });
    // //     } else {
    // //         return res.json({ error: "error" });
    // //     }
    // // }
    // // res.json({ status: "error", error: "InvAlid Password" });
    // else {
    //     if (password === user.password) {
    //         console.log("Logged-in")
    //         return res.json('alright')
    //     }
    //     else {
    //         console.log("Incorrect Password")
    //     }
    // }
});
