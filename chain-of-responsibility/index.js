const App = require('./app');

const app = new App();

// first middleware
app.use((req, res, next) => {
  res.write('first ');
  // next();
  res.end();
});

// second middleware
app.use((req, res, next) => {
  res.write('second ');
  next();
});

app.listen(80);
