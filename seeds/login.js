/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('login').del()
  await knex('login').insert([
    {username: 'admin', password: 'admin123'},
    {username: 'larasjul', password: 'laras123'},
  ]);
};
