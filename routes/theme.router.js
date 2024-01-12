const router = require('express').Router();
const ThemesPage = require('../components/ThemesPage');

router.get('/', async (req, res) => {
  const html = res.renderComponent(ThemesPage, { title: 'Themes Page' });
  res.send(html);
});

module.exports = router;
