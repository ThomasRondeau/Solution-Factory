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
    try {
      return connection.query(query, [this.nom, this.prenom, this.email, this.password, this.birthdate, this.city])
      .then(results => results.insertId);
    } catch (error) {
      console.log(error)
    }
  }

  // Méthode pour obtenir un utilisateur par son identifiant
  static getUser(userId) {
    const query = `SELECT * FROM client WHERE id = ?`;
    try {
      return connection.query(query, [userId])
      .then(results => {
        if (results.length > 0) {
          return results
        } else {
          console.log("L'id n'a pas été trouvé")
        }
      })

    } catch (error) {
      console.log(error)
    }

  }


  static login(password, email){
    const query = `SELECT password FROM client WHERE email = ?`;
    try {
      connection.query(query, [email])
      .then(results => {
        if (results.length > 0 & password == results) {
          // ajouter la session de connexion
        } else {
          throw new Error("L'id ou le mot de passe ne sont pas bon");
        }
      })
    } catch (error) {
      throw error
    }

  }

}
module.exports = User;