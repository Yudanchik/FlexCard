const express = require('express');
const router = express.Router();
const mainRouter = require('./Main.routes');
const homeRouter = require('./Home.routes');
const questionRouter = require('./Questions.routes');

const themesRouter = require('./themes.router');
const answersROuter = require('./answers.routes');

router.use('/', mainRouter);
router.use('/home', homeRouter);
router.use('/themes', themesRouter);
router.use('/questions', questionRouter);
router.use('/answers', answersROuter);

module.exports = router;
