


const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('.r'))

app.get('/aboutus', (req, res) => {
  res.send('About us page')
})


app.listen(PORT, () => {
  console.log('Listening on port 7000');
})