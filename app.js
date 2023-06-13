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

app.get('/accueil', (req, res) => {
  res.send('Bienvenue sur votre site web !');
});



app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
  
    // Autres traitements ou actions que vous souhaitez effectuer avec les données
  
    res.send(`
      <h2>Formulaire soumis avec succès</h2>
    `);
  });

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

