'use strict'
const { knex } = require('../database');
const sizes = require('./sizes');

console.log("sizes", sizes);


const sizePromises = sizes.map(({name, inches})=>{
  return knex('sizes').insert({name: name, inches: inches});
})


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then(function () {
      // Inserts seed entries
      return  Promise.all(sizePromises)
    });
};
