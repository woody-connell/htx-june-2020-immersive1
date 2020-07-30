const express = require('express');
const router = express.Router();

router.post('/registration', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  console.log(username, password, email);
  res.send('post data');
})
module.exports = router;