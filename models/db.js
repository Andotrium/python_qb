const mongoose = require('mongoose')

const db = mongoose.Schema({
    ques: String,
    op1: String,
    op2: String,
    op3: String,
    op4: String,
    correct:Number,
    submittedBy: String,
    corr: Number, //number of people that got it right
    incorr: Number //number of people that got it incorrect
})

module.exports = mongoose.model('db', db)