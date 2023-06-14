const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parsing de l'url renvoyé par le form
app.use(bodyParser.urlencoded({ extended: false }));

// definition de l'emplacement des ressources statiques
app.use(express.static('static'));

// création de la session
app.use(session({
    secret: 'hsfqifnqlifnvvnazpnea',
    resave: false,
    saveUninitialized: true
}));

// Creation de la connexion mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'courtier'
  });

connection.connect((err) => {
if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
}
console.log('Connexion à la base de données établie');
});



// tous les get pour les pages
app.get('/', (req, res) => {
    res.redirect('/accueil');
});

app.get('/accueil', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/static/register.html');
});

app.get('/consulter_demande', (req, res) => {
    res.sendFile(__dirname + '/static/consulter_demande.html');
});

app.get('/create_credit', (req, res) => {
    res.sendFile(__dirname + '/static/create_credit.html');
});

app.get('/answer_offre', (req, res) => {
    res.sendFile(__dirname + '/static/answer_offre.html');
});


// tous les posts pour traiter les forms

app.post('/submit', (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const birthdate = req.body.birthdate;
    const city = req.body.city;
    const password = req.body.password;   

  });

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

