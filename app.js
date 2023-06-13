const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur votre site web !');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});


