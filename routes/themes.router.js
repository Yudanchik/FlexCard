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

module.exports = router;
