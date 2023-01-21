const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const validator = require("validator");
const cors = require("cors");
const http = require("http");
const cookieParser = require("cookie-parser");
const requireAuth=require('./middleware/requireAuth')
const { createTokens } = require("./JWT");
const mongoose = require("mongoose");
require("./models/UserSchema");
require("./models/QuestionSchema");
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const mongoUrl =
  "mongodb+srv://Kunal123:kunal1234@cluster0.qtx9wb3.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Cloud");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Listening to port:5000");
});

const User = mongoose.model("UserInfo");
const Question = mongoose.model("Question");

app.post("/profile", (req, res) => {
  res.status(200).json("profile");
});
app.post("/register", async (req, res) => {
  const { username, email, password, confirmpassword } = req.body;
  if (!username || !email || !password || !confirmpassword) {
    return res.status(400).json("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json("Please enter a valid email");
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json("Enter a strong password");
  }
  if (password !== confirmpassword) {
    return res.status(400).json("Passwords do not match");
  }
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).json("Username already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const registeredUser = await User.create({
    username,
    email,
    password: hash,
  });
  try {
    const accessToken = await createTokens(registeredUser);
    //creating a cookie
    // res.cookie("access-token",accessToken,{
    //   maxAge: 60*60*24*3*1000,
    //   httpOnly:true
    // })
    console.log(accessToken);
    console.log("inside");
    return res.status(200).json({ registeredUser:username,accessToken });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
  // }
});
//   }
// })
app.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!username || !password) {
    return res.status(400).json("All fields must be filled");
  } 
  else if (!user) 
  {
    return res.status(400).json("You're not registered with us :) ");
  } 
    const match = await bcrypt.compare(password, user.password);
    if (!match) 
    {
      return res.status(400).json("Credentials Incorrect");
    } 
    try{
      const accessToken = createTokens(user);
      return res.status(200).json({ registeredUser: user.username, accessToken });
    }
    catch (error)
    {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
    }
    }
  
);

// app.post("/", async (req, res) => {
//   const { username, password } = req.body;
//   if(!username || !password)
//   {ess.json())
//     throw Error ('All fields must be filled')
//   }
//   try {
//     const user = await User.findOne({ username });

//     if (!user) {
//       // return res.json({ error: "User do not exists" });
//       console.log("User Do not exist");
//       throw Error("You're not registered with us ");
//     } else {
//       if (user.password === password) {
//         console.log("Authenticated");
//         return res.json({ status: "ok", username });
//       } else {
//         console.log("Incorrect password ");
//         return res.json({ status: "password missmatch" });
//       }
//     }
//   } catch {

//   }
// });

//new
// app.post("/", async (req, res) => {
//     const { username, password } = req.body;
//     if(!username || !password)
//     {
//       throw Error ('All fields must be filled')
//     }
//     try {
//       const user = await User.findOne({ username });

//       if (!user) {
//         // return res.json({ error: "User do not exists" });
//         console.log("User Do not exist");
//         throw Error("You're not registered with us ");
//       }
// const match =await bcrypt.compare(password,user.password)
// if(!match)
// {
//   throw Error('Credentials Missmatch')
// }
//     console.log('authenticated')
//     res.status(200).json({user,status:'ok'})
//     }
//     catch (error)
//     {
//       res.status(400).json({error:error.message})
//     }

//   });

//new
// app.post("/register", async (req, res) => {
//   //receiving from users
//   const { username, email, password, confirmpassword } = req.body;
//   console.log(req.body);
// //validate
// // if(!email || !password || !username || !confirmpassword)
// // { console.log(1)
// //   throw Error('All Fields must be filled')
// // }
// // if(!validator.isEmail(email))
// // { console.log(2)
// //   throw Error('Enter a valid Email')
// // }
// // if(!validator.isStrongPassword(password))
// // {console.log(3)
// //   throw Error('Password Not Strong')
// // }

//   try {
//     const oldUser = await User.findOne({ email });
//     if (oldUser) {

//       console.log("user exists");
//        throw Error('Email already in use ')
//     }
//     if (password !== confirmpassword) {
//         console.log("No password match");
//         throw Error('Password do not match ')
//       }

// const salt =await bcrypt.genSalt(10);
// const hash=await bcrypt.hash(password,salt)

//         const user=await User.create({
//           username: username,
//           email: email,
//           password: hash,
//         });
//         console.log("New added");
//        res.send(user);

//     }

//    catch (error) {
//     res.status(400).json({ error:error.message});

//   }
// });

// app.post("/register", async (req, res) => {
//   //receiving from users
//   const { username, email, password, confirmpassword } = req.body;
//   console.log(req.body);
//   try {
//     const oldUser = await User.findOne({ email });
//     if (oldUser) {
//       console.log("user exists");
//       return res.json(0);
//     } else {
//       if (password !== confirmpassword) {
//         console.log("No password match");
//       } else {
//         const salt = await bcrypt.genSalt(10);
//         const hash = await bcrypt.hash(password, salt);

//         const user = await User.create({
//           username: username,
//           email: email,
//           password: hash,
//         });
//         console.log("New added");
//         return res.json({ status: "ok", user });
//       }
//     }
//   } catch (err) {
//     res.send({ status: "error" });
//   }
// });

app.use(requireAuth)

app.post("/createquiz", async (req, res) => {
  const { adminName, questionArray, room, timer } = req.body;
  console.log(questionArray);
  try {
    console.log("encounterd");
    await Question.create({
      adminName: adminName,
      questionArray: questionArray,
      room: room,
      timer: timer,
    });
    console.log("New data-set added");
    return res.json({ status: "ok" });
  } catch (err) {
    console.log("err encountered");
    console.log(err);
    res.send({ status: "error" });
  }
});

app.post("/scorecard", async (req, res) => {
  const { score, username, room } = req.body;
  console.log(req.body);
  const questionSet = await Question.updateOne(
    { room: room },
    { $push: { scoreArray: { username: username, score: score } } }
  );
  if (questionSet) {
    console.log("Room found ");
  } else {
    console.log("Room not found ");
  }
});
app.get("/quiz1", async (req, res) => {
  console.log(req.headers.room);
  const { room } = req.headers;
  const questions = await Question.findOne({ room });
  console.log(questions);
  return res.json({ questions });
});

app.get("/ranklist", async (req, res) => {
  console.log(req.headers.room);
  const { room } = req.headers;
  const rank = await Question.findOne({ room }, { scoreArray: 1 }).sort({
    "scoreArray.username": 1,
  });
  console.log(rank);
  return res.json({ rank });
});

app.post("/joinroom", async (req, res) => {
  const { room } = req.body;

  console.log(room);
  const user = await Question.findOne({ room });

  if (user) {
    console.log("Room exists");
    return res.json(1);
  } else {
    console.log("Invalid Room code");
    return res.json(-1);
  }
});
