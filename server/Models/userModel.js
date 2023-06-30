const mongoose =require("mongoose");
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const userModel = mongoose.model("users1",userSchema);
module.exports = userModel;