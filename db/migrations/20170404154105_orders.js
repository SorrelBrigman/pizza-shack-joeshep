
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('orders', (table)=>{
      table.increments('order_id').primary();
      table.string('order_name').notNullable();
      table.string('order_email').notNullable();
      table.string('order_phone').notNullable();
      table.integer('order_size_id').notNullable();
      table.string('order_toppings').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('orders');
};
