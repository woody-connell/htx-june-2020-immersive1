const express = require('express');
const app = express();
const PORT = 4000;

const cookieParser = require('cookie-parser');
const session = require('express-session');

app.get(session({
  secret: 'my dog likes chicken',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false, maxAge: 14*24*60*1000}
}))

app.get('/', (req, res) => {
  let name = "Woody"; // req.body.name
  req.session.name = "Woody";
  res.send('Hello, World!');
})

app.get('/about', (req, res) => {
  let val = req.session.name;
  res.send(`About Us ${val}`);
})













app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}.`)
})