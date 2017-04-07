'use strict'

const passport = require('passport');


module.exports.show = (req, res) =>
  res.render('login', {page: 'Login'});




module.exports.create = (req, res, next) =>
  passport.authenticate('local', (err, user, msg) => {
    if (err) return next(err)
    if (!user) return res.render('login', {msg, page: 'Login'})

    req.login(user, (err) => {
      if (err) return next(err)
      res.redirect('/')
    })
  })(req, res, next)
  //above is a self invoking function, so above is going to run as soon as we call it
//self invoking so if it's logged in, it becomes a global variable


module.exports.edit = (req, res) =>
  res.render('logout', {page: "Logout"})

  module.exports.destroy = (req, res) => {
    //passport adds logout method automatically
    req.logout()
    res.redirect('/login')
  }
