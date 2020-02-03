const express = require('express');
const port = process.env.PORT || 3300;
const app = express();
const authRoutes = require('./router/api');
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

app.get('/', (req, res ) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});