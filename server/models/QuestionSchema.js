const mongoose = require('mongoose');

const ScoreSchema=new mongoose.Schema({
    username:{
        type:String
    },
    score:{
        type:String
    }
})

const QuestionSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    opta: {
        type: String,
        required: true
    },
    optb: {
        type: String,
        required: true
    },
    optc: {
        type: String,
        required: true
    },
    optd: {
        type: String,
        required: true
    },
    ans: {
        type: String,
        required: true
    }
 
})

const QuestionSetSchema=new mongoose.Schema({
    adminName:
    {
        type:String,
        required:true,
    },
    questionArray:[QuestionSchema],
    scoreArray:[ScoreSchema],
    room:
    {
        type:String,
        required:true,
    },
    timer:
    {
        type:String,
        required:true,
    }
})

//collection:-Register
const Question = new mongoose.model("Question", QuestionSetSchema)
module.exports = Question;