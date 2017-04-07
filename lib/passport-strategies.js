'use strict'

const passport = require('passport');
const {Strategy} = require('passport-local');
const {knex } = require('../db/database');

const User = require('../models/user');

passport.serializeUser((user, done)=> done(null, user.id));

passport.deserializeUser((id, done)=> {
  knex('user').where({id}).first()
  .then((user)=>{ done(null, user)})
  .catch((err)=>{done(err, null)})
});

const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
  },

  (email, passwordStr, done) => {
    //go to db and try to find a user based on that email
   User.findOneByEmail(email)
   //if we get a user back, compare that password
   .then((user)=>{
    if (user) {
      //return will end the statement
      return Promise.all([
        user,
        user.comparePassword(passwordStr)
        ])
    }
    //if there is not a user, return this message
    done(null, null, {msg: 'Email does not exist in our system'})
   })
   .then(([user, matches]) => {
      if (matches) {
        done(null, user, {msg: 'Successfully logged in'})
      } else {
        done(null, null, {msg: 'Password does not match'})
      }
   })
   .catch(done)
});

//make local strategy our middleware function we call on passport
passport.use(localStrategy)
