'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class GamesOrm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  GamesOrm.init({
    players: DataTypes.INTEGER,
    type: DataTypes.STRING(36),
    details: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'GamesOrm',
  });
  return GamesOrm;
};