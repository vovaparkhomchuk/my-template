const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'liza loh', message: 'LIZA SOSISKA'})
});

app.get('/about', (req, res) => {
  res.render('about', {title: 'liza loh', message: 'LIZA SOSISKA'})
});

app.listen(5000, () => console.log('We are running on port 5000...'));