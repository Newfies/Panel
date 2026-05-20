// Panel/panel.js

// Modules
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

// Variables
const PORT = process.env.PORT || 4000;

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
app.get('/dashboard', (req, res) => res.redirect('/'));

app.get('/tools', (req, res) => res.render('tools'));

app.get('/settings', (req, res) => res.render('settings'));

app.get('/shutdown', (req, res) => res.send('hello world'));

// App | Catch All
app.use((req, res) => {
    res.status(404).redirect('/');
});

// App | Listen
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));