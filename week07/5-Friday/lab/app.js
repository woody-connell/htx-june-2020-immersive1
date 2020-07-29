const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('Public'));

app.use(require('./');)























app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}.`);
})