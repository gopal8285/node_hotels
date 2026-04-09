const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', (req, res) => {
  res.send('welcome to my hotel , how can i help you ?, we have list of menu');
});


// imports person routes file

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

// imports menu item routes file
const menuItemRoutes = require('./routes/menuitemRoutes');
app.use('/menuitem', menuItemRoutes);


app.listen(3000, () => {
  console.log('server is running on port 3000');
});

