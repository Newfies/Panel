// ProjectPanel/panel.js

// Modules
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

// Variables
const PORT = process.env.PORT || 3000;

// App | Set & Use
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SECRET || 'fallback-secret',
    resave: false,
    saveUninitialized: true
}));

// App | Get & Post
app.get('/', (req, res) => res.render('dashboard'));

// App | Listen
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));