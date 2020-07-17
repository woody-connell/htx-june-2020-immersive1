const axios = require('axios');

const app = axios();

app.listen(6000, () => {
  console.log('Listening on port 6000.');
})

app.get('/', (req, res) => {
  res.send('Home Page');
})

app.get('/api', (req, res) => {
  axios.get('https://corona.lmao.ninja/v2/states')
  .then((response) => {
    console.log(response);
    res.json(response)
  })
  res.send('Hello, World!')
})

// something is wrong here ^
