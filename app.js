const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur votre site web !');
});

app.get

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
  
    // Autres traitements ou actions que vous souhaitez effectuer avec les données
  
    res.send(`
      <h2>Formulaire soumis avec succès</h2>
      <p>Nom : ${name}</p>
      <p>Email : ${email}</p>
    `);
  });

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});


 