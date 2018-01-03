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

// #1 - Get all restaurants
// knex.select().table('restaurants');

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
//   .select('id', 'name', 'address_zipcode')
//   .where('cuisine','Italian')
//   .whereIn('address_zipcode',['10012','10013','10014'])
//   .limit(5)
//   .orderBy('name','asc')
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// #8 - knex
// .insert([{name: 'Byte Cafe', borough: 'Brooklyn', cuisine: 'coffee', address_building_number: '123', address_street: 'Atlantic Avenue', address_zipcode: '11231'}],'id').into('restaurants')
// .then(results => console.log(results));

// knex('restaurants')
//   .select('address_building_number','address_street','id')
//   .where({address_building_number: '123'})
//   .then(results => console.log(results));

//#9 - knex
//   .insert([{name: 'Cat Cafe', borough: 'Bronx', cuisine: 'coffee', address_building_number: '923', address_street: 'Grand Concourse', address_zipcode:'10710'}],'id').into('restaurants')
//   .returning(['id','name'])
//   .then(results => console.log(results));

//#10 -  knex
//   .insert([{name: 'Cat Cafe', borough: 'Bronx', cuisine: 'coffee', address_building_number: '923', address_street: 'Grand Concourse', address_zipcode:'10710'},{name: 'Hey Cafe', borough: 'Bronx', cuisine: 'coffee', address_building_number: '923', address_street: 'Grand Concourse', address_zipcode:'10710'},{name: 'Let Cafe', borough: 'Bronx', cuisine: 'coffee', address_building_number: '923', address_street: 'Grand Concourse', address_zipcode:'10710'}],'id').into('restaurants')
//   .returning(['id','name'])
//   .then(results => console.log(results));

//#11 - knex ('restaurants')
//   .where('nyc_restaurant_id', '30191841')
//   .returning('name')
//   .update({
//     name: 'DJ Reynolds Pub and Restaurant1'
//   })
//   .then(results => console.log(results));
 
// #12 - knex('grades')
//   .where('id', '10')
//   .del()
//   .then(results => console.log(results));

// #13 - knex('restaurants')
//   .where('id', '22')
//   .del()
//   .then(results => console.log(results));


//hydrate/dehydrate exercises

// [
//   {
//     '2': {
//       'id': 2,
//       'name': 'John Doe',
//       'age': 34,
//       'pets': [
//         {
//           'name': 'Rex',
//           'type': 'dog'
//         },
//         {
//           'name': 'Rex',
//           'type': 'dog'
//         }
//       ]
//     },
//     '3': {
//       'id': 3,
//       'name': 'Mary Jane',
//       'age': 19,
//       'pets': [
//         {
//           'name': 'Mittens',
//           'type': 'kitten'
//         },
//         {
//           'name': 'Fluffy',
//           'type': 'cat'
//         }
//       ]
//     }
//   }
// ];

// const hydrated = {};
// people.forEach(row => {
//   if ( !(row.id in hydrated) ) {
//     hydrated[row.id] = {
//       id: row.id,
//       name: row.name,
//       age: row.age,
//       pets: []
//     };
//   }
//   hydrated[row.id].pets.push({
//     name: row.petName,
//     type: row.petType,
//   });
// });
// console.log(hydrated);

// knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id as gradeId', 'grade', 'score')
//   .from('restaurants')
//   .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
//   .orderBy('date', 'desc')
//   .limit(10)
//   .then(results => {

//     const hydrated = {};
//     results.forEach(row => {
//       if ( !(row.id in hydrated) ) {
//         hydrated[row.id] = {
//           name: row.name,
//           cuisine: row.cuisine,
//           borough: row.borough,
//           grades: []
//         };
//       }
//       hydrated[row.id].grades.push({
//         gradeId: row.gradeId,
//         grade: row.grade,
//         score: row.score
//       });
//     });
//     console.log(JSON.stringify(hydrated, null, 4));
//   });

//TREEIZE CHALLENGE --------------------------------------

var Treeize   = require('treeize');
const restaurants   = new Treeize();

knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id as gradeId', 'grade', 'score')
  .from('restaurants')
  .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
  .orderBy('date', 'desc')
  .limit(10)
  .then(results => {
    restaurants.grow(results);
    console.log(JSON.stringify(restaurants.getData(), null, 4));
  });

//TREEIZE CHALLENGE END--------------------------------------



// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});