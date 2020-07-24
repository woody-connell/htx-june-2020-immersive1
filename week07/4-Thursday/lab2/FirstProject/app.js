// Example of setting up a server with node & express

const express = require('express');
const app = express();

// '/' -> homepage 
// homepage route
app.get('/', (req, res) => {
  res.send('This is express');
})

// aboutus route
app.get('/aboutus', (req, res) => {
  res.send('<h1>About Us</h1>')
})

// route works for /cat /cats /cat/ /cats/
app.get('/cats?/?', (req, res) => {
  res.send('cats');
})

// route works with anything following dogs -> dogsasldkfja;sdlfkj works
app.get('/dogs*', (req, res) => {
  res.send('dogs');
})

// /contact?name=woody
app.get('/contact', (req, res) => {
  let fname = req.query.fname;
  let lname = req.query.lname;
  res.send(`My name is ${fname} ${lname}`);
})


app.get('/contact/:fname', (req, res) => {
  let name = req.params.fname;
  res.send(`My fist name is ${name}`);
})


app.get('/flights/:from/:to', (req, res) => {
  res.send(`Departing from: ${req.params.from} Arriving at: ${req.params.to}`)
})

// making a calculator
app.get('/add/:num1/:num2', (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let total = num1 * num2;
  res.send(`${num1} * ${num2} = ${total}`);
})

// app.get('/photo/:img', (req, res) => {
// res.send(`<img src="${req.params.img}" >`);
// })

app.get('/data', (req, res) => {
  
  let data = {
    fname: "Woody",
    lname: "Connell"
  }
  res.json(data);
})









app.listen(3000, () => {
  console.log('Listening on port 3000');
})
