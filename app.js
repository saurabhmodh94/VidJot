const express = require('express'); // TODO: ES6

const app = express();

// Custom Middleware
app.use(function(req, res, next) {
  // code here
  next();
});

// Index Route
app.get('/', (req, res) => {
  res.send('index');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
