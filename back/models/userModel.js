const e = require('express');
const mysql = require('mysql');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'courtier'
});

// Modèle User
class User {
  constructor(nom, prenom, email, password, birthdate, city) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.birthdate = birthdate;
    this.city = city;

  }

  // Méthode pour créer un utilisateur
  createUser() {
    const query = `INSERT INTO users (username, email) VALUES (?, ?, ?, ?, ?, ?)`;
    connection.connect(function(err){
      if(err) throw err;
      connection.query(query, [this.nom, this.prenom, this.email, this.password, this.birthdate, this.city], function(err, results){
        if(err) throw err;
      })
    })
  }

  // Méthode pour obtenir un utilisateur par son identifiant
  static getUser(userId) {
    const query = `SELECT * FROM client WHERE id = ?`;
    connection.connect(function(err){
      if(err) throw err;
      connection.query(query, [userId], function(err, results){
        if(err) throw new Error("L'id n'a pas été trouvé");
        return results;
      })
    })
  }

  static loginUser(email, password){
    const query = `SELECT id_client, password FROM client WHERE email = ?`;
    connection.connect(function(err){
      if(err) throw err;
      connection.query(query, [email], function(err, results){
        if (results.length > 0 && password == results[0].password) {
          return results[0].id_client
        } else {
          throw new Error("L'id ou le mot de passe ne sont pas bons");
        }
      })
    })
  }
}

module.exports = User;