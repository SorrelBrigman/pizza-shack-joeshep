'use strict'

const {Router} = require('express');
const {show} = require('../controllers/homeCtrl');

const homeRouter = Router();

homeRouter.get('/', show);

module.exports = homeRouter;
