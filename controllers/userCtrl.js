'use strict'

const User = require('../models/user')

module.exports.show = (req, res) => {
  res.render('register', {page: 'Register'});
}

module.exports.create = ({body: {email, password, confirmation}}, res) => {
  //basic form validation
  if (password === confirmation) {
    User.findOneByEmail(email)
    .then((user)=>{
      //check to see if user already exists in the db
      if (user) return res.render('register', {msg: 'email is already registered', page: 'Register'});
      return User.forge({email, password})
      .save()
      .then(()=>{
        res.redirect('/');
      })
      //catch for the save
      .catch((err)=> res.render('register', {msg: `Dang. There was a problem. Try again.`, page: 'Register'}))
    })
    //catch for the findOneByEmail
    .catch((err)=> res.render('register', {msg: `Dang. There was a problem. Try again.`, page: 'Register'}));
  } else {
    res.render('register', {msg: `Oops. Passwords don't match. Please try again`, page: 'Register'})
  }
}
