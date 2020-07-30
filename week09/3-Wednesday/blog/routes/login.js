const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
})

router.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  console.log(username, password);
  res.send('post data');
})

module.exports = router;