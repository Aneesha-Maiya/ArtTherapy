const mongoose =require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const userModel = mongoose.model("users1",userSchema);
module.exports = userModel;
