const express = require('express')
const path = require('path')
const app = express();
const { render } = require('ejs')
require("./db/connect")
const port = process.env.PORT || 3000;
const Register = require("./models/users");
const { json } = require("express");
// to host a static file 

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index", { title: 'HomePage' })
})
app.get('/register', (req, res) => {
    res.render("register-login", { title: 'Registration-Login'})
})
//creating new user in database
app.post('/register', async (req, res) => {
    try {
        //   console.log(req.body);
        const password = req.body.registerpassword;
        const cpassword = req.body.registerconfirmpassword;
        if (password === cpassword) {
            const registeruser = new Register({
                fullname: req.body.registerfullname,
                username: req.body.registerusername,
                email: req.body.registeremail,
                password: req.body.registerpassword
            })
            const register = await registeruser.save();
            res.status(201).render("after", { title: 'After Registration' });

        }
        else {
            res.send("No password match")
        }

    }
    catch (err) {
        res.status(400).send(err);
    }

})

app.listen(port, () => {
    console.log(`server is listening on :${port}`);
})