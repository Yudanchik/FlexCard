const express = require('express');
const router = express.Router();

const mainRouter = require('./MainRoutes');
const homeRouter = require('./Home.routes');
const themesRouter = require('./themes.router');

router.use('/', mainRouter);
router.use('/home', homeRouter);
router.use('/themes', themesRouter);

module.exports = router;
