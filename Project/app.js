const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
const categories= require("./Routes/categories")

const app = express()

mongoose.connect('mongodb://127.0.0.1/learningPlatform').then(() => console.log("connection is successful to Database")).catch(err => console.error('couldnt connect to mongodb', err))


app.use(express.json())
// app.use(bodyParser.json());
app.use(categories)



const port  = process.env.PORT || 3000;
app.listen(port , () => console.log(`Listening on ${port}`))

