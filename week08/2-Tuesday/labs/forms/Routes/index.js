const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello');
})

router.post('/', (req, res) => {
  res.send('post request');
})

router.put('/', (req, res) => {
  res.send('put request');
})

router.delete('/', (req, res) => {
  res.send('delete request');
})


module.exports = router;