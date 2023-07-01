const express = require("express");
const userModel = require("../Models/userModel");
const router = express.Router();
const control = require("../Controller/controller");

router.get('/getUsers/:email',control.getUser);
router.get('/getUserByID/:id',control.getByid);
router.post('/postUser',control.postUsers);
router.delete('/deleteUser',control.deleteUsers);
router.put('/modifyUser',control.modifyUsers);
router.put('/userSuggestion',control.postSuggestions);

module.exports = router;