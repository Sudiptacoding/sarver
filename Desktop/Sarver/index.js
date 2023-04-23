const express = require('express')
require('dotenv').config()
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
PORT = process.env.PORT
const mongoose = require('mongoose');


// db cunnect
const dbCunnect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USR}:${process.env.PASS}@cluster1.rfzkata.mongodb.net/newuser`);
        console.log('Db cunnect sucessfully')
    } catch (error) {
        console.log(error)
    }
}

const nameSchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const nameModel = mongoose.model('allusers', nameSchema)



app.post('/name', async (req, res) => {
    try {
        const name = req.body;
        const modelSave = nameModel({
            name: name.name
        })
        await modelSave.save()
        res.send(name.name)
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/data', async (req, res) => {
    try {
        const user = await nameModel.find({})
        if (user) {
            res.send(user);
        }
    } catch (error) {

    }
})




app.get('/all', (req, res) => {
    res.send('Amar sonr bangla ami tomai valobasi')
})



app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, async () => {
    await dbCunnect()
    console.log(`https://localhost${PORT}`)
})