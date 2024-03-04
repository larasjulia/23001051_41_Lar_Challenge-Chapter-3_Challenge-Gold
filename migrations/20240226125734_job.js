/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('job',
  (table) => {
    table.increments('jobId'),
    table.string('jobTitle'),
    table.integer('departmentId').references('departmentId').inTable('department')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('job');
};
