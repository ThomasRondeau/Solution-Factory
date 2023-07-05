const connection = require('./db_connexion.js')

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
    const query = `INSERT INTO client (nom, prenom, email, birthdate, password, ville) VALUES (?, ?, ?, ?, ?, ?)`;
    connection.query(query, [this.nom, this.prenom, this.email, this.birthdate, this.password, this.city], function(err, results){
      if(err) throw err;
    })
  }

  // Méthode pour obtenir un utilisateur par son identifiant
  static getUser(userId) {
    const query = `SELECT * FROM client WHERE id = ?`;
    connection.query(query, [userId], function(err, results){
      if(err) throw new Error("L'id n'a pas été trouvé");
      return results;
    })
  }

  static loginUser(email, password){
    const query = `SELECT id_client, password FROM client WHERE email = ?`;
    connection.query(query, [email], function(err, results){
      if(err) throw err;
      if (results.length > 0 && password == results[0].password) {
        return results[0].id_client
      } else {
        throw new Error("L'id ou le mot de passe ne sont pas bons");
      }
    })
  }
}

module.exports = User;