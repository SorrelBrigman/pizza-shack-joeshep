'use strict'

const {bookshelf} = require('../db/database');
//allows us to compare a password string to a hashed password string
const {compare} = require('bcryptjs');

const User = bookshelf.Model.extend(
{
  //these are instance methods:
  tableName: 'customers',
  bcrypt: {field: 'password'},
  comparePass : function (passwordStr) {
    console.log("password String from user", passwordStr);
    console.log('user', this.attributes);
    //take in the password that the user typed on the form, and
    //compare it to the password we just pulled in from the db
    return compare(passwordStr, this.attributes.password);
  }
}, //end of instance methods, the following are class or status methods
{
    findOneByEmail: function(email) {
      return this.forge({email})
      .fetch()
      .then((user)=>{
        console.log('Got User', user.get('email'));
        return user;
      })
      .catch(()=>{
        consol.log('yep, this happends when no email');
        return (null);
      })
    }
})


module.exports = User;
