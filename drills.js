'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')({
  client: 'pg',
    connection: 'postgres://rgxxvnxt:PFi5DU8d1lrU-j3ZaoYBoEJcsacY64vY@baasu.db.elephantsql.com:5432/rgxxvnxt'
});
// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
knex
  .select()
  .from('restaurants')
  .limit(2)
  .debug(true)
  .then(results => console.log(results));


// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});