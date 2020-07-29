const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Front Page');
})

app.get('/aboutus', (req, res) => {
  res.send('About Us Page');
})

app.get('/faq', (req, res) => {
  res.send('FAQ Page');
})

// This will get any URL
app.get('*', (req, res) => {
  res.send('You have reached an error.');
})


















app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

