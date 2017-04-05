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


module.exports.create = ({body}, res, err)=>{
  console.log('body', body)
  Order.forge(body)
  //save stuff from form
  .save()
  //once that works, show success message
  .then((orderObj)=> {
    console.log('orderObj', orderObj);
    res.render('index', {orderMsg: "Thanks for your order!"});
  })
  //if it doesn't work
  .catch(({errors})=>{

    return Promise.all([
      //resolve that promise with errors
      Promise.resolve(errors),
      //go get the sizes and toppings again
      getSizes(),
      getToppings()
      ])
  })
  //get the data from all of the resolves (errors, getSizes and getToppings)
  .then(([errors, sizes, toppings])=> {
    //body contains the input information, so we can repopulate the form
    res.render('order', {page: 'Order', sizes, toppings, errors, body})
  })
  .catch(err);
 }

module.exports.show = (req, res, err) => {
  Promise.all([getToppings(), getSizes()])
  .then(([toppings, sizes])=>{
    res.render('order', {page: 'Order', sizes, toppings})
  }).catch(err)
}
