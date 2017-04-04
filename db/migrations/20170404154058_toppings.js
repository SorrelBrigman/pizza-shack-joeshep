
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('toppings', (table)=>{
      table.increments('topping_id').primary();
      table.string('topping_name').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('toppings');
};
