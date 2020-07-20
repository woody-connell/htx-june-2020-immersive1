const express = require('express');
const app = express();

//ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//public
app.use(express.static('public'));


//route references
app.use(require('./Routes/index'));
app.use(require('./Routes/speakers')); 


app.listen(3000, () => {
  console.log('Listening on port 3000');
})


