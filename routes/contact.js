'use strict'

const {Router} = require('express');
const contactRouter = Router();
const {show, addContact} = require('../controllers/contactCtrl.js')

contactRouter.get('/contact', show);
contactRouter.post('/contact', addContact)

module.exports = contactRouter;
