'use strict'

const Order = require('../models/order');
const {knex} = require('../db/database')
const Size = ()=> knex('sizes');
const Topping = () => knex('toppings');

const getToppings = () => Topping().select().then((rows)=> rows).catch((error)=> {throw error});

const getSizes = () =>
  Size().select()
  .then((rows)=> rows)
  .catch((error)=> {
    throw error
  });


module.exports.create = ({body, flash}, res, err)=>{
  console.log('body', body)
  Order.forge(body)
  .save()

  .then((orderObj)=> {
    flash('orderMsg', 'Thanks for your order')
    res.redirect('/');
  })
  //if it doesn't work
  .catch(({err})=>{

    Promise.all([
      //resolve that promise with errors
      Promise.resolve(err),
      //go get the sizes and toppings again
      getSizes(),
      getToppings()
      ])
    //get the data from all of the resolves (errors, getSizes and getToppings)
    .then(([err, sizes, toppings])=> {
      //body contains the input information, so we can repopulate the form
      res.render('order', {page: 'Order', sizes, toppings, err, body})
    })
  })
  .catch(err);
 }

module.exports.show = (req, res, err) => {
  Promise.all([getToppings(), getSizes()])
  .then(([toppings, sizes])=>{
    res.render('order', {page: 'Order', sizes, toppings})
  }).catch(err)
}
