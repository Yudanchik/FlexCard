'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Сonnection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Question }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Question, { foreignKey: 'question_id' });
    }
  }
  Сonnection.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'User', key: 'id' },
        onDelete: 'cascade',
      },
      question_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Question', key: 'id' },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Сonnection',
    }
  );
  return Сonnection;
};
