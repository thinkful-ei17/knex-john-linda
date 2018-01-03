'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const { DATABASE, PORT } = require('./config');
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://rgxxvnxt:PFi5DU8d1lrU-j3ZaoYBoEJcsacY64vY@baasu.db.elephantsql.com:5432/rgxxvnxt'
});

const app = express();

// app.get('/restaurants', (req, res) => {
//   knex.select('id', 'name', 'cuisine', 'borough')
//     .from('restaurants')
//     .limit(10)
//     .then(results => res.json(results));
// });

// ADD ANSWERS HERE
// app.get('/restaurants/:id', (req, res) => {
//   knex.first('restaurants.id', 'name', 'cuisine', 'borough','grades.id as grades_id' , 'grade', 'date as inspectionDate', 'score')
//     .select(knex.raw('CONCAT(address_building_number, \' \', address_street, \' \', address_zipcode ) as address'))
//     .from('restaurants')
//     .where('restaurants.id', req.params.id)
//     .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')    
//     .orderBy('date', 'desc')
//     .then(results => res.json(results));
// });

app.post('/restaurants/', jsonParser, (req, res) => {
  knex
    .insert([{name: req.body.name, borough: req.body.borough, cuisine: req.body.cuisine, grades: forEach([{grade: req.body.grade}])},'id').into('restaurants')
    .then(results => res.json(results));
});

//loop through grades; insert? forEach 

//in express - 3 ways to send info; what are 3 ways to receive
//params is from paramatized routing ex. /restaurants/:id

app.listen(PORT);
