const express = require('express');
const app = express();
const PORT = 4000;

const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));







app.set('view engine', 'ejs');

app.use(session({
  secret: 'my dog likes chicken',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false, maxAge: 14 * 24 * 60 * 60 * 1000}
}))


let authLogin = (req, res, next) => {
  // check session for username



}












app.get('/', (req, res) => {
  res.send('Home Page');
})

app.get('/login', (req, res) => {
  res.render('login');
})

let user = [
  {username: 'Cainan', password: '1234'},
  {username: 'Woody', password: '1234'},
  {username: 'Veronica', password: '1234'},
  {username: 'Dan', password: '1234'},
  {username: 'Michael', password: '1234'},
  {username: 'Micah', password: '1234'},
]











app.post('/login', (req, res) => {
  // userID
  // password
  let userID = req.body.userID;
  let password = req.body.password;

  let user = users.find(userRecord => {
    return userRecord.username == userID && userRecord.password == password;
  })

if (user != null){
  // set the sessoin info
  if (req.session){
    res.session.username = userID;
    res.redirect('/',)
  }
  else {
    res.redirect('/login');
  }

  res.send('stuff');
}

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}.`);
})