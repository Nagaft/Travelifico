const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Search extends Model {}

Search.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        city:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        date:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            valdiate:{
                isDate:{
                    msg: 'Please write a valid date for the reservation',
                }
            }

        },
        party_num:{
            type: DataTypes.INTEGER,
            allowNull: false ,
        },
        food_type:{
            type: DataTypes.STRING,
            allowNull: false
        },
        reservation:{
            type: DataTypes.STRING,
            timestamps: false,

        },
        restaurant:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'search',
      }
);

modeule.exports = search;