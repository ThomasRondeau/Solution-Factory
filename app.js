const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
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
    saveUninitialized: true,
    cookie : {maxAge : 1000 * 60 * 60 * 24}
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



// redirect
app.get('/', (req, res) => {
    res.redirect('/accueil');
});


// tous les posts pour traiter les forms

app.post('/submit', (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const birthdate = req.body.birthdate;
    const city = req.body.city;
    const password = req.body.password;

    var sql = "INSERT INTO client (nom, prenom, email, birthdate, city, password) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(sql, [nom, prenom, email, birthdate, city, password], (err, result) => {
        if (err) {
            console.error("Une erreur s'est produite lors de l'insertion des données : ", err);
            res.send('<script> alert("Il y a eu un problème dans la création du compte") </script>')
        } else {
            console.log("Données insérées avec succès !");
            //Ajouter un redirect
        }
    });
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    var sql = "SELECT password FROM client WHERE email == ?"
    connection.query(sql , [email], (err, result) => {
        if(result == password){
            // creation de session
        }
    })

})

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

