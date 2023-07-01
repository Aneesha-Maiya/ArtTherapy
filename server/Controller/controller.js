const express = require("express");
const userModel = require("../Models/userModel");
const suggesstionModel = require("../Models/suggestionModel")

exports.getUser = (req,res) => {
    const users = userModel.findOne(
    {email: req.params.email})
    .then(user => {
        if(!user){
            return res.status(404).send("User not found!")
        }
        res.json(user);
        console.log("User data obtained Successfully");
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Error retriving data");
    })
}

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
