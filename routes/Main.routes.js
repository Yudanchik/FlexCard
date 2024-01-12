const router = require('express').Router();

const { Users } = require('../db/models');

const MainPage = require('../components/MainPage');
// const HomePage = require('../components/HomePage');

router.get('/', function (req, res) {
  const html = res.renderComponent(MainPage, { title: 'Main page' });
  res.send(html);
});

// router.post('/', async (req, res) => {
//   const { name } = req.body;
//   const user = await Users.create({ name });
//   res.end();
//   // const html = res.renderComponent(HomePage, { user });
//   // res.send(html);
// });

module.exports = router;
