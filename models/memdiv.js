'use strict';
module.exports = function(sequelize, DataTypes) {
  var MemDiv = sequelize.define('member_divisions', {
    stu_id: DataTypes.INTEGER,
    div_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MemDiv;
};