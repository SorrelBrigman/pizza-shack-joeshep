'use strict'

const {Router} = require('express')

const {show, create} = require('../controllers/orderCtrl')

const orderRouter = Router();

orderRouter.get('/order', show);
orderRouter.post('/order', create);

module.exports = orderRouter
