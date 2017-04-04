
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('customers', (table)=>{
      table.increments('customer_id').primary();
      table.string('customer_name').notNullable();
      table.string('customer_password').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('customers');
};
