const express = require('express');
const router = express.Router();

const mainRouter = require('./MainRoutes');
const homeRouter = require('./Home.routes');


router.use('/', mainRouter)
router.use('/home', homeRouter)

module.exports = router;