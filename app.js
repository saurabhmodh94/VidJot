const express = require('express'); // TODO: ES6
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to mongoose
mongoose
  .connect('mongodb://localhost/vidjot-dev', {
    useNewUrlParser: true // to get rid of warning
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Handlebars Middleware
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

// Custom Middleware
app.use(function(req, res, next) {
  // code here
  next();
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Add Idea Form
app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
