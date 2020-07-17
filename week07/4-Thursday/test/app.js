// Same thing as pureNode.js except this file uses express and not just node

const express = require('express');

const app = express();

// req & res stands for request & resposne - by convention, this is usually the only two options 
app.get('/', (req, res) => {
  res.send('<h1>This is express</h1>');
})

app.get('aboutus', (req, res) => {
  res.send('<h1>This is cool.</h1>');
})

