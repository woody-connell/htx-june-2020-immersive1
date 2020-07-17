const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

let data = {data: [{
  id: 1,
  name: "Black Golden Retriever",
  img: "https://goldenhearts.co/wp-content/uploads/2020/01/black-golden-retriever-1.jpg",
},
{
  id: 2,
  name: "Black Lab",
  img: "https://img.dog-learn.com/dog-breeds/labrador-retriever/black-labrador-retriever-i16-sz3.jpg",
},
{
  id: 3,
  name: "Black Great Dane",
  img: "https://cdn.shopify.com/s/files/1/0826/6259/files/greatdane_large.jpg?v=1565988151",
},
{
  id: 4,
  name: "Black Poodle",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/330px-Full_attention_%288067543690%29.jpg",
}
]}

app.get('/dogs/:id', (req, res) => {
  let id = req.params.id

  res.send(`
  <div>${}</div>
  <img src="">
    `);
}) 



