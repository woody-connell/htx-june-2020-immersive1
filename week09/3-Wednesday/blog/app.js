const express = require('express');
const app = express();
const PORT = 4000;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


app.use(session({
  secret: 'cat',
  resave: false,
  saveUninitialize: true,
  cookie: {secure: false, maxAge: 14 * 24 * 60 * 60 * 1000}
}))

app.use(bodyParser.urlencoded({extended: false}));

// views
app.set('view engine', 'ejs');
app.use(express.static('public'));

// routes
app.use(require('./routes/index'));
app.use(require('./routes/registration'));
app.use(require('./routes/login'));
app.use(require('./routes/admin'));
app.use(require('./routes/protected'));































































app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}.`);
})