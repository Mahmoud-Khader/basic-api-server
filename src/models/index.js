'use strict';

const POSTGRES_URI = "postgres://postgres@localhost:5432/postgres";
const { Sequelize, DataTypes } = require('sequelize');
const clothes = require('./clothes');
const food = require('./food');

let sequelize = new Sequelize(POSTGRES_URI,{});

module.exports={
    food:food(sequelize,DataTypes),
    clothes:clothes(sequelize,DataTypes),
    db:sequelize
}