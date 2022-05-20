const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./router/authRouter")
require('dotenv').config()
app = express()
app.use(express.json())

app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my api' })
})

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION)
        app.listen(3000, () => {
            console.log("server running...")
        })
    } catch (error) {
        console.log(error);
    }
}

start()