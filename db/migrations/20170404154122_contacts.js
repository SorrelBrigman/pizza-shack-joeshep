
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('contacts', (table)=>{
      table.increments();
      table.string('contact_name').notNullable().unique();
      table.string('contact_email').notNullable();
      table.string('contact_phone').notNullable();
      table.string('contact_message').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('contacts');
};
