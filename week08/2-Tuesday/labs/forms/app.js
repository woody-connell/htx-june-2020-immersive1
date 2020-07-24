const express = require('express');
const app = express();

const PORT = 3000;

// Public
app.use(express.static('Public'));

// Views
app.set('view engine', 'ejs');

// Routes
app.use(require('./Routes/index'));




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})