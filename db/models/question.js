'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Connection, Theme }) {
      this.hasMany(Connection, { foreignKey: 'question_id' });
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Questions.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      questions: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Theme', key: 'id' },
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
      modelName: 'Question',
    }
  );
  return Questions;
};
