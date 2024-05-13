const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const db = require('./models/db.js')

dotenv.config()
mongoose.connect(process.env.database1_key)
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.use(express.static("resources"))

app.listen(6969)
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/portal.html')
})
app.get('/q', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/newq', async function(req, res) {
    const newq = await db.create({
        ques: req.body.ques,
        op1: req.body.op1,
        op2: req.body.op2,
        op3: req.body.op3,
        op4: req.body.op4,
        correct:req.body.correct,
        submittedBy: req.body.submittedBy,
        corr: 0,
        incorr: 0
    })
})