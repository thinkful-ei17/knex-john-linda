'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://rgxxvnxt:PFi5DU8d1lrU-j3ZaoYBoEJcsacY64vY@baasu.db.elephantsql.com:5432/rgxxvnxt'
});
// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));

// knex.select('id', 'name', 'borough', 'cuisine')
//   .from('restaurants')
//   .where( { borough: 'Manhattan'} )
//   .then(results => console.log(results));

// knex.select('id', 'name', 'borough', 'cuisine')
//   .from('restaurants')
//   .where({ borough: 'Manhattan' })
//   .debug(true)
//   .then(results => console.log(JSON.stringify(results, null, 4)))
//   .catch( err => console.log( err ) );

//#1 - Get all restaurants
//knex.select().table('restaurants');

//#2 - Get Italian restaurants
// knex.select()
//   .from('restaurants')
//   .where({cuisine: 'Italian'})
//   .then(results => console.log(results));

//#3 - Get 10 Italian restaurants, subset of fields
// knex.select('id', 'name')
//   .from('restaurants')
//   .where('cuisine','Italian')
//   .limit(10)
//   .then(results => console.log(results));

//#4 - Count of Thai restaurants
// knex('restaurants')
//   .count()
//   .where('cuisine', 'Thai')
//   .then(results => console.log(results));

//#5 - Count of restaurants
// knex('restaurants').count('id')
//   .then(results => console.log(results));

//#6 - Count of Thai restaurants in zip code - 11372
// knex('restaurants')
//   .count()
//   .where('cuisine', 'Thai') //can you do all filters in single where
//   .where('address_zipcode', '11372')
//   .then(results => console.log(results));

//#7 - Italian restaurants in one of several zip codes 10012, 10013, or 10014 zip, alpha sorted
// knex('restaurants')
//   .select('id', 'name', 



// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});