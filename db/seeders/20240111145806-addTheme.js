'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        title: 'Неудобные вопросы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Детские вопросы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Themes', null, {});
  },
};
