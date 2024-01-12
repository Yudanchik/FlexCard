const express = require('express');
const router = express.Router();
const mainRouter = require('./Main.routes');
const homeRouter = require('./Home.routes');
const questionRouter = require('./Questions.routes')



router.use('/', mainRouter)
router.use('/home', homeRouter)
router.use('/questoin', questionRouter)

module.exports = router;