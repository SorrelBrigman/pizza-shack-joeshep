'use strict'

const {Router} = require('express');
const {show, create} = require('../controllers/sessionCtrl.js');
const loginRouter = Router();

loginRouter.get('/login', show);
loginRouter.post('/login', create)

module.exports = loginRouter;
