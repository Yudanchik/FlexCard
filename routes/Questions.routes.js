const router = require('express').Router();

const QuestionPage = require('../components/QuestionPage');
const QuestionCard = require('../components/QuestionCard');

const { Question } = require('../db/models');
// /questions/2/questions/0
router.get('/:ThemeID/questions/:Index', async (req, res) => {
  const { Index, ThemeID } = req.params;
  // console.log(Index);

  const questions = await Question.findAll({
    where: { theme_id: ThemeID },
  });

  const arrQuest = questions.map((el) => el.questions);
  const arrAnswer = questions.map((el) => el.answer);
  console.log(arrAnswer);
  // console.log(questions);

  // базу данных вопросов нужный темы
  if (arrQuest[Index]) {
    const html = res.renderComponent(QuestionCard, {
      title: 'Question Page',
      arrQuest,
      Index,
      arrAnswer,
    });
    res.send(html);
  } else if (!arrQuest[Index]) {
    res.redirect('/themes');
  }
});
//   /questions/2/questions/${+Index + 1}/questions/${answer}
router.get(
  '/questions/2/questions/:Index/questions/:answer',
  async (req, res) => {}
);

module.exports = router;
