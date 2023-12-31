const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const app = express();
const userModel = require("./Models/userModel");
const cors = require("cors");
const router = require("./Routes/routes");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use("/api",router);
app.listen(3001,()=>{
    console.log("Server is running successfully");
});
mongoose.connect("mongodb+srv://anishakmaiya:"+ process.env.MONGODB_PASSWORD +"@userdb.caapiif.mongodb.net/",{
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
})
.then(()=>{
    console.log("MongoDB connection Successful");
})
.catch(error => {
    console.error(error.message);
});