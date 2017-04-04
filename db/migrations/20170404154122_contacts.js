
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('contacts', (table)=>{
      table.increments('contact_id').primary();
      table.string('contact_name').notNullable();
      table.string('contact_email').notNullable();
      table.string('contact_phone').notNullable();
      table.string('contact_message').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('contacts');
};
