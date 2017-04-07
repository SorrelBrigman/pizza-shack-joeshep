'use strict'

require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const session = require('express-session')
const {red, cyan} = require('chalk');
const {passport} = require('passport');
const KnexSessionStore = require('connect-session-knex')(session);
const { knex } = require('./db/database');


const port = process.env.PORT || 3000

//pug configuration
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/myviews'))

app.locals.company ="🍕Pizza Shack"
app.locals.body = {};
app.locals.errors = {};
app.locals.body.magic = "Fooooo!"
// app.locals.orderMsg


//middlewares
app.use(cookieParser('secretpizza'));
app.use(session({cookie: {maxAge: 60000}, secret: 'secretpizza', resave: true, saveUninitialized: false}));
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'pizzashacksupersecretkey'
}));

app.use(express.static('public'));
app.use(routes)

// app.get('/contact', (req, res, next)=>{
//   res.render('contact', {page: 'Contact'});
// })

// app.get('/login', (req, res, next)=>{
//   res.render('login', {page: 'Login'});
// })

// app.get('/register', (req, res, next)=>{
//   res.render('register', {page: 'register'});
// })

app.use((req, res)=>{
  res.render('404');
})



//end of middleware
app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
