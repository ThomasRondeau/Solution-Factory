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
  createUser(callback) {
    const query = `INSERT INTO client (nom, prenom, email, birthdate, password, ville) VALUES (?, ?, ?, ?, ?, ?)`;
    connection.query(query, [this.nom, this.prenom, this.email, this.birthdate, this.password, this.city], function(err, results) {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête d\'insertion :', err);
        callback(err);
      } else {
        console.log('L\'utilisateur a été créé avec succès');
        callback(null);
      }
    });
  }

  static loginUser(email, password, callback){
    const query = `SELECT id_client, password FROM client WHERE email = ?`;
    var boolean = false;
    connection.query(query, [email], function(err, results){
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête :', err);
      } else {
        if (results.length > 0 && password == results[0].password) {
          var result = results[0].id_client
          boolean = true
          console.log('L\'utilisateur est connecté');
        }else{
          var error = new Error("L'id ou le mot de passe ne sont pas bons")
        }
      }
      callback(error, boolean, result)
    })
  }

    // Méthode pour obtenir un utilisateur par son identifiant
    static getUser(userId, callback) {
      const query = `SELECT * FROM client WHERE id = ?`;
      connection.query(query, [userId], function(err, results){
        callback(err, results);
      })
    }
}


module.exports = User;