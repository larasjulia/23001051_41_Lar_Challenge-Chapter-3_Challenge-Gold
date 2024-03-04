const knex = require('knex')
const knexfile = require('./knexfile');

//inisialisasi db
const db = knex(knexfile.development);

module.exports = db;