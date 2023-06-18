const express = require('express');
const app = express();
require('dotenv').config()

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.orvq7xp.mongodb.net/Summerschool?retryWrites=true&w=majority`)
console.log('Db cunnect')


const post_route = require('./routes/postRouts')
app.use(post_route)

app.listen(5000, () => {
    console.log('Https://localhost run 5000')
})