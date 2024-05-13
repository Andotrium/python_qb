const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
mongoose.connect(process.env.database1_key)

app.listen(6969)
app.get('/', (req, res)=>{
    res.send('yo wassup')
})