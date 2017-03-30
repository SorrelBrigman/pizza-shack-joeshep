'use strict'

const {Router} = require('express');
const {show} = require('../controllers/loginCtrl.js');
const loginRouter = Router();

loginRouter.get('/login', show);

module.exports = loginRouter;
