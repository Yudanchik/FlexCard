const router = require('express').Router();
const ThemesPage = require('../components/ThemesPage');
const { Theme } = require('../db/models');

router.get('/', async (req, res) => {
  const themes = await Theme.findAll();
  const html = res.renderComponent(ThemesPage, {
    title: 'Themes Page',
    themes,
  });
  res.send(html);
});

// router.get('/:themId', async (req, res) => {
//   const { themId } = req.params;
  
//   const  theme  = await Theme.findOne({ where: { id: themId } });
//   console.log(theme);
//   const html = res.renderComponent(QuestionPage, { title: 'Question Page' });
//   res.send(html);
// });

module.exports = router;
