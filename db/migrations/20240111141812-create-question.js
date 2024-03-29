'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      questions: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      answer: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      theme_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Themes', key: 'id' },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  },
};
