const router = require('express').Router();

const { Question } = require('../db/models');

router.post('/', async (req, res) => {
  const { id, answer } = req.body;
  // console.log(id, anwser);
  // anwser; ///ответ  с инпут
  // id; // Вопрос наш
  const data = await Question.findOne({ where: { questions: id } });
  console.log(data.answer);
  console.log(answer);

  if (answer === data.answer) {
    res.json({ message: 'Правильный', answer: data.answer });
    return;
  }
  res.json({ message: 'Неправильный', answer: data.answer });
});

module.exports = router;
