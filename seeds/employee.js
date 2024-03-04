/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('employee').del()
  await knex('employee').insert([
    {name: 'Laras', position: 'Developer', birth: '2000-07-18', phone: '0895421927187', email: 'laras.julia18@gmail.com', address: 'Cilegon'},
    {name: 'Dany', position: 'Poject Engineer', birth: '1995-06-07', phone: '08126283356', email: 'mhmd.dany@gmail.com', address: 'Cilegon'},
  ]);
};
