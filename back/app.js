const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// récupérer le router
const routes = require('./router.js')

// tous les app.use
app.use(cookieParser());  // pour les sessions
app.use(bodyParser.urlencoded({ extended: false })); // pour récupérer les body sous la bonne forme dans les formulaires
app.use('/', routes)                    // servir le router
app.use(session({
    secret: 'hsfqifnqlifnvvnazpnea',
    resave: false,
    saveUninitialized: false,
    cookie : {maxAge : 1000 * 60 * 60 * 24}
}));


app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
