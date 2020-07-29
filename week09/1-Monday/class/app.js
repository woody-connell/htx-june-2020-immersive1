// Promise Library that is passed to pg-promise
const promise = require('bluebird');

const initOptions = {
  promiseLib: promise
}


// Configure a connection
const config = {
  host: 'localhost',
  port: 5432,
  database: 'pgDB2020',
  user: 'postgres'
}





// db object - methods
const pgp = require('pg-promise')(initOptions);

// database object - gives us access to perform CRUD operations on database
const db = pgp(config); 


console.log(db);

db.none("INSERT INTO ")



