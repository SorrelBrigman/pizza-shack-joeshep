'use strict'

const {Router} = require('express');
const user = require('../controllers/userCtrl')
// const {show} = require('../controllers/registerCtrl.js');
const registerRouter = Router();

registerRouter.get('/register', user.show);
registerRouter.post('/register', user.create)

module.exports = registerRouter;
