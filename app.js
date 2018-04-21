const express = require('express');
const app = express();
const path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 3000;

/*app.get('/',(req,res) => {
  res.send('Best Juice Co.');
});*/

app.get('/', (req,res) => {
  res.render('splash');
});
app.get('/login', (req,res) => {
  res.render('login');
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
