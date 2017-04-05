'use strict'

const toppings = require('./toppings');





exports.seed = (knex, Promise) => {
  let toppingsPromises = toppings.map(({name})=>{
    return knex('toppings').insert({name: name});
  })

  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(toppingsPromises);
    });
};
