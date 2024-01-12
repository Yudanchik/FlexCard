const router = require('express').Router();

const QuestionPage = require('../components/QuestionPage');
const QuestionCard = require('../components/QuestionCard');

const { Question } = require('../db/models');

router.get('/:ThemeID', async (req, res) => {
  const { ThemeID } = req.params;
  const questions = await Question.findAll({
    where: { theme_id: ThemeID },
  });
  const arrQuest = questions.map((el) => el.questions);
  console.log(arrQuest);
  console.log(questions);
  // базу данных вопросов нужный темы
  const html = res.renderComponent(QuestionCard, {
    title: 'Question Page',
    arrQuest,
  });
  res.send(html);
});

// router.get('/query', async (req, res) => {});
// console.log(req);
// res.end();

module.exports = router;
