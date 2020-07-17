const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Add two numbers together</h1>')
})

app.listen(8000, () => {
  console.log('Listening on port 8000');
})

//calculate/4/5
app.get('/calculate/:a/:b', (req, res) => {
  let a = parseInt(req.params.a);
  let b = parseInt(req.params.b);

  res.send(`Addition of ${a} + ${b} = ${a + b}`);

})