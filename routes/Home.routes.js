const router = require('express').Router();

const HomePage = require('../components/HomePage');

router.get('/', function (req, res) {
  const html = res.renderComponent(HomePage, { title: 'Home Page' });
  res.send(html);
});

module.exports = router;
