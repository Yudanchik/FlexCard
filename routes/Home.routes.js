const router = require('express').Router();

const HomePage = require('../components/HomePage');

const { User } = require('../db/models');

router.get('/', function (req, res) {
  const html = res.renderComponent(HomePage, { title: 'Home Page' });
  res.send(html);
});

module.exports = router;
