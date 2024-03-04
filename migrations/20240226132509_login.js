/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('login',
  (table) => {
    table.increments('loginId'),
    table.string('username'),
    table.string('password'),
    table.integer('employeeId').references('employeeId').inTable('employee');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('login');
};
