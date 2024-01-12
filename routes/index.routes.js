const express = require('express');
const router = express.Router();

const mainRouter = require('./Main.routes');


router.use('/', mainRouter)

module.exports = router;