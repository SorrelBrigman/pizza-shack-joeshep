'use strict'

const {Router} = require('express');
const {edit, destroy} = require('../controllers/sessionCtrl.js')

const logoutRouter = Router();

logoutRouter.get('/logout', edit);
logoutRouter.post('/logout', destroy);

module.exports = logoutRouter;
