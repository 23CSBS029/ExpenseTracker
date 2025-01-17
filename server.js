const express = require("express")
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const expenseRoute = require('./Routes/expenseRoute.js')

dotenv.config();

const app = express();
app.use(express.json());

const port = 3000;

app.listen ( port, ()=> {
    console.log(`Port is running in ${port}`);
} )

const mongo_url = "mongodb://localhost:27017/remo"

mongoose.connect(mongo_url).then ( ()=> {
    console.log("Connected to db");
} )
.catch ( (error)=> {
    console.log(error);
    
} )

app.use('/api', expenseRoute )