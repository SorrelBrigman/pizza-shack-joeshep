
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('orders', (table)=>{
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.integer('size_id').notNullable();
      table.specificType('toppings', knex.raw('text[]')).notNullable().defaultTo('{"cheese"}');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('orders');
};
