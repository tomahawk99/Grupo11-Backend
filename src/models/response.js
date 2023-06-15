'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  response.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    xcord: DataTypes.STRING,
    ycord: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'response',
  });
  return response;
};