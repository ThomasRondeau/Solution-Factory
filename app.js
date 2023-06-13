const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// definition de l'emplacement des ressources statiques
app.use(express.static('static'));

// création de la session
app.use(session({
    secret: 'votre_clé_secrète',
    resave: false,
    saveUninitialized: true
}));

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
    const name = req.body.name;
    const prenom = req.body.prenom;
    const email = req.body.email;
  
  
    res.send(`
      <h2>Formulaire soumis avec succès</h2>
    `);
  });

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

