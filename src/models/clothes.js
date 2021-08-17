'use strict';

// const sequelize = require("sequelize");

const clothes = (sequelize,DataTypes)=>{
    let clothes=sequelize.define('clothes',{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },

        Shirt:{
            type:DataTypes.STRING
        },
        Pants:{
            type:DataTypes.STRING
        },
        Shoes:{
            type:DataTypes.STRING
        }
    });
    return clothes
}

module.exports = clothes;