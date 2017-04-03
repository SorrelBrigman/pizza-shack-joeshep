'use strict';

const {Router} = require('express');
const {show} = require('../controllers/aboutCtrl');
const aboutRouter = Router();

aboutRouter.get('/about', show);

module.exports = aboutRouter;
