const express = require('express');
const router = express.Router();

const mainRouter = require('./MainRoutes');


router.use('/', mainRouter)

module.exports = router;