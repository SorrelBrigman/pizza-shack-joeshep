'use strict'

const {Router} = require('express');
const contactRouter = Router();
const {show} = require('../controllers/contactCtrl.js')

contactRouter.get('/contact', show);

module.exports = contactRouter;
