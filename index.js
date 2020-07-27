const path = require('path');
const express = require('express');
const connectDB = require('./config/dbConnect');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

// database connection
connectDB();

//Templete engine
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Define Routes
app.use('/', require('./route/router'));

app.listen(port, () => console.log(`Server is running on port: ${port}`));
