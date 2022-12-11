const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
require("./models/UserSchema");
require("./models/QuestionSchema");
app.use(express.json());
app.use(cors());

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
//userinfo is the model name or collection name
const User = mongoose.model("UserInfo");
const Question = mongoose.model("Question");
//getting data back from cloud

app.post("/register", async (req, res) => {
  //receiving from users
  const { username, email, password, confirmpassword } = req.body;
  console.log(req.body);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      //    return res.send({ error: "User exists" })
      console.log("user exists");
      return res.json(0);
    } else {
      //creating new user
      if (password !== confirmpassword) {
        console.log("No password match");
        // res.sendFile(__dirname+'/Nopassword.html')
      } else {
        await User.create({
          username: username,
          email: email,
          password: password,
        });
        console.log("New added");
        return res.json({ status: "ok", username });
      }
    }
  } catch (err) {
    res.send({ status: "error" });
  }
});
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

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.json({ error: "User do not exists" });
    console.log("User Do not exist");
  } else {
    if (user.password === password) {
      console.log("Authenticated");
      return res.json({ status: "ok", username });
    } else {
      console.log("Incorrect password ");
      return res.json({ status: "password missmatch" });
    }
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
  // const rank=await Question.aggregate([
  //   ...    { $unwind: "$" },
  //   ...    { $sort: { "details.Score": 1 } },
  //   ...    { $group: { _id: "$_id", details: { $push: "$details" } } }
  //   ... ]);
  //   const rank=await Question.aggregate(
  //     // Initial document match (uses index, if a suitable one is available)
  //     { $match: {
  //         room:room
  //     }},

  //     // Expand the scores array into a stream of documents
  //     { $unwind: '$scoreArray' },

  //     // Filter to 'homework' scores
  //     // { $match: {
  //     //     'scores.type': 'homework'
  //     // }},

  //     // Sort in descending order
  //     { $sort: {
  //         'scoreArray.score': -1
  //     }}
  // )
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
