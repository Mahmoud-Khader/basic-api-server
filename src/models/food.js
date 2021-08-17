'use strict';

const food = (sequelize, DataTypes) => {
   let food= sequelize.define('food', {
        firstName:{ 
            type: DataTypes.STRING, 
            allowNull: false, 
            defaultValue: true
        },
        theMeal: { 
        type: DataTypes.STRING, 
        allowNull: false,
        defaultValue: true
    }, 
        drink:{ type: DataTypes.STRING, 
        allowNull: false, 
        defaultValue: true
    }
        
    });
    return food
}

module.exports = food;