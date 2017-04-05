
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('sizes', (table)=>{
      table.increments();
      table.string('size_name').notNullable().unique();
      table.integer('size_inches').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('sizes');
};
