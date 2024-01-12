const router = require('express').Router();

const QuestionPage = require('../components/QuestionPage');

router.get('/', function (req, res) {
  const html = res.renderComponent(QuestionPage, { title: 'Question Page' });
  res.send(html);
});

console.log ('123')

module.exports = router;