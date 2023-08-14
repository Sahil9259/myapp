const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./model/user')

const app = express();
app.use(express.json());
app.use(cors)

async function connectToMongo() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Connection error:", err);
    }
}

connectToMongo();

app.post('/user',(req,res)=>{
    UserModel.create(req.body)
    .then(user =>res.json(user))
    .catch(err =>res.json(err))
})

app.listen(5000,()=>{
    console.log("Server is running on 5000");
})