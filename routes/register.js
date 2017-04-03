'use strict'

const {Router} = require('express');
const {show} = require('../controllers/registerCtrl.js');
const registerRouter = Router();

registerRouter.get('/register', show);

module.exports = registerRouter;
