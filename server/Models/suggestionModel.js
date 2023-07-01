const mongoose =require("mongoose");
const suggesstionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
})
const suggesstionModel = mongoose.model("suggestions1",suggesstionSchema);
module.exports = suggesstionModel;