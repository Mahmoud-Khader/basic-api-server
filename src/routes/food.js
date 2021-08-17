'use strict';

const express = require('express');
const router = express.Router();
const {food} = require('../models/index');

router.get('/food', getAllfood);
router.get('/food/:id', getOnefood);
router.post('/food', createfood);
router.put('/food/:id', updatefood);
router.delete('/food/:id', deletefood);

//Get All Data Function 
async function getAllfood(req, res) {
    let all = await food.findAll();
    res.status(200).json(all);
}

// Get One  Function
async function getOnefood(req, res) {
    const id = parseInt(req.params.id);
    let onefood = await food.findOne({ where: { id: id } });
    res.status(200).json(onefood);

}

// create  Function

async function createfood(req, res) {
    let newItem = req.body;
    let newfood = await food.create(newItem);
    res.status(201).json(newfood);

}

// Update  Fucntion

async function updatefood(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;

    let newfood = await food.findOne({ where: { id: id } });
    let updatefood = await newfood.update(obj);
    res.status(200).json(updatefood);

}

//Delete Function

async function deletefood(req, res) {
    const id = parseInt(req.params.id);
    let deletefood = await food.destroy({ where: { id: id } });
    res.status(204).json(deletefood);
}

module.exports = router;