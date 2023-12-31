const express = require("express");
const userModel = require("../Models/userModel");
const suggesstionModel = require("../Models/suggestionModel")
var userData;

exports.getUser = (req,res) => {
    const users = userModel.findOne(
    {email: req.params.email})
    .then((data) => {
        if(data === null){
            console.log("User does not exists");
            return res.status(404).send("User not found!")
        }
        console.log("Data:",data)
        console.log("Password:",req.params.password);
        // res.json(users);
        // userData = data;
        if(req.params.password != data.password){
            console.log("Invalid username or password");
            return res.status(400).send("Invalid username or password")
        } 
        console.log("User data obtained Successfully");
        res.status(200).send(data);
        return data;
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Error retriving data");
    })
}
exports.userData;
exports.getByid = (req,res) => {
    userModel.findById(req.params.id)
    .then(user => {
        if(!user){
            return res.status(404).send("User not found!")
        }
        res.json(user);
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Error retriving data");
    })
}

exports.postUsers = (req,res) => {
    const user = new userModel(req.body);
    user.save()
    .then(() => {
        console.log(req.body);
        console.log("User created Successfully");
        res.status(200).send("Signup done successfully");
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Error posting data");
    })
}

exports.postSuggestions = (req,res) => {
    const feedback = new suggesstionModel(req.body);
    feedback.save()
    .then(() => {
        console.log(req.body);
        console.log("Suggestion saved Successfully");
        res.status(200).send("Suggestions saved successfully");
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Error posting data");
    })
}

exports.deleteUsers =  (req,res) => {
    userModel.findOneAndDelete(
        {email: req.body.email},
        {new: true}
    ).then(user => {
        if(!user){
            return res.status(404).send("User not found!")
        }
        res.status(200).send("User deleted successfully");
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Error deleting user");
    })
}

exports.modifyUsers = (req,res) => {
    userModel.findOneAndUpdate(
        {email: req.body.email},
        {   
            firstname: req.body.changed_firstName,
            lastname: req.body.changed_lastName,
            password: req.body.changed_Password
        },
        {new: true}
    ).then(user => {
        if(!user){
            console.log("User does not exists");
            return res.status(404).send("User not found!");
        }
        else{
            console.log(req.body);
            console.log("User details updated successfully");
            res.status(200).send("User details changed successfully");
        }
    }).catch(error => {
        console.error(error);
        res.status(500).send("Error updating data");
    })
}
