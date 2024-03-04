const { TableBuilder } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('employee',
  (table) => {
    table.increments('employeeId'),
    table.string('name'),
    table.string('position'),
    table.date('birth'),
    table.string('phone'),
    table.string('email'),
    table.string('address')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('employee');
};
