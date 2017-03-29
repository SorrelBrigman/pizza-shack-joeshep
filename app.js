'use strict'

require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000

//pug configuration
app.set('view engine', 'pug');

//middlewares

app.use(express.static('public'));

app.get('/', (req, res, next)=>{
  res.render('index');
})

app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
