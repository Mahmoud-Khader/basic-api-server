'use strict';

const express = require('express');
const {clothes} = require('../models/index');
const router=express.Router();

router.get('/clothes',getAllClothes);
router.get('/clothes/:id',getOneCloth);
router.post('/clothes',createClothes);
router.put('/clothes/:id',updateClothes);
router.delete('/clothes/:id',deleteClothes);

//Get All Data Function 
async function getAllClothes(req,res) {
    let allClothes=await clothes.findAll();
    res.status(200).json(allClothes);
    
}

// Get One  Function
async function getOneCloth(req,res) {
    const id =parseInt(req.params.id);
    let oneCloth=await clothes.findOne({where:{id:id}});
    res.status(200).json(oneCloth);
    
}

// create  Function

async function createClothes(req,res) {
    let newItem=req.body;
    let newClothes = await clothes.create(newItem);
    res.status(200).json(newClothes);
    
}

// Update  Fucntion

async function updateClothes(req,res) {
    let id=parseInt(req.params.id);
    let obj = req.body;

    let newCloth=await clothes.findOne({where:{id:id}});
    let updateClothes=await newCloth.update(obj);
    res.status(200).json(updateClothes);
    
}

//Delete Function

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deleteClothes = await clothes.destroy({ where: { id:id } });
    res.status(204).json(deleteClothes);
}

module.exports = router;