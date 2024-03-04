/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('attendance',
  (table) => {
    table.increments('attendanceId'),
    table.integer('employeeId').references('employeeId').inTable('employee'),
    table.integer('dutyId').references('dutyId').inTable('duty'),
    table.integer('jobId').references('jobId').inTable('job'),
    table.integer('leaveId').references('leaveId').inTable('leave'),
    table.date('date')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('attendance');
};
