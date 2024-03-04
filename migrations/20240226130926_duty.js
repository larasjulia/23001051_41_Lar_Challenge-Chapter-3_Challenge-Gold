/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('duty',
  (table) => {
    table.increments('dutyId'),
    table.integer('employeeId').references('employeeId').inTable('employee'),
    table.integer('jobId').references('jobId').inTable('job'),
    table.integer('duration'),
    table.date('date')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('duty')
};
