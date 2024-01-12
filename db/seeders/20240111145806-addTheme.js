'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        title: 'Неудобные вопросы',
        img: 'https://4brain.ru/blog/wp-content/uploads/2017/02/%D0%BD%D0%B5%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%B5-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Детские вопросы',
        img: 'https://www.sotki.ru/public/article/images/095cadec78d9afb3661706f19ff23059103595ee.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Themes', null, {});
  },
};
