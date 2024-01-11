'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        questions: `Я летаю, но не птица,
        Люблю ночью порезвиться.
        Днем я сплю вниз головой,
        Ты не встретишься со мной.`,
        answer: 'летучая мышь',
        theme_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Не испортишь кашу им,
        Бутерброды с ним едим.
        Оно для крема пригодится,
        Чтобы тортом насладиться.`,
        answer: 'сливочное масло',
        theme_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Не вода, а все время течёт,
        Не хулиган, а больно бьёт. `,
        answer: 'электрический ток',
        theme_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Он с утра всегда весёлый,
        Звонко будит детей в школу,
        Родителям поможет встать,
        Никому не даст проспать! `,
        answer: 'будильник',
        theme_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Самый первый входит в дом,
        Дружит он с любым замком.`,
        answer: 'ключ',
        theme_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //////////////////
      {
        questions: `ты когда-нибудь читал(а) чужие сообщения?`,
        answer: 'да',
        theme_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Сколько ты весишь?`,
        answer: 'много',
        theme_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Ты когда-нибудь нарушал закон?`,
        answer: 'да',
        theme_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Если у тебя когда-нибудь появится шанс поцеловать знаменитость, кто бы это был?`,
        answer: 'дорох',
        theme_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Когда-нибудь лгал(а) в этой игре?`,
        answer: 'да',
        theme_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Когда-нибудь писала в бассейн или море?`,
        answer: 'да',
        theme_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questions: `Если бы обладала магической силой, то какой?`,
        answer: 'магической',
        theme_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
