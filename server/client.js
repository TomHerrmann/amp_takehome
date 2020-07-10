const { Client } = require('pg');

// create Heroku PostgresSQL db: https://elements.heroku.com/addons/heroku-postgresql

const connectionString = 'PASTE YOUR CONNECTION STRING HERE';

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect(err => {
  if (err) console.log(err);
  else console.log('Connected to database!');
});

module.exports = client;
