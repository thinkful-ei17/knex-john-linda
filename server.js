'use strict';

const express = require('express');

const { DATABASE, PORT } = require('./config');
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://rgxxvnxt:PFi5DU8d1lrU-j3ZaoYBoEJcsacY64vY@baasu.db.elephantsql.com:5432/rgxxvnxt'
});

const app = express();

app.get('/restaurants', (req, res) => {
  knex.select('id', 'name', 'cuisine', 'borough')
    .from('restaurants')
    .limit(10)
    .then(results => res.json(results));
});

// ADD ANSWERS HERE

app.listen(PORT);
