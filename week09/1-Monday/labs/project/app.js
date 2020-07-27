



const promise = require('bluebird'); //promise library that we are passing to pg-promise

let initOptions = {
  promiseLib: promise
}
// configure a connection

const config = {
  host: 'localhost',
  port: 5432,
  database: 'pgdb2020',
  user: 'postgres'
}

let pgp = require('pg-promise');({initOptions})

const db = pgp(config); //database object - gives us access to perform CRUD operations
// db object - methods








