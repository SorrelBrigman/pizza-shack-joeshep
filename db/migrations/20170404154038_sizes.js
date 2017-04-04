
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('sizes', (table)=>{
      table.increments('size_id').primary();
      table.string('size_name').notNullable();
      table.integer('size_inches').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('sizes');
};
