const connection = require('./db_connexion.js')

class Bank{
    static loginBank(id, password, callback){
        const query = `SELECT password FROM banque WHERE id_banque = ?`;
        var boolean = false;
        connection.query(query, [id], function(err, results){
          if (err) {
            console.error('Erreur lors de l\'exécution de la requête :', err);
          } else {
            if (results.length > 0 && password == results[0].password) {
              boolean = true
              console.log('L\'utilisateur est connecté');
            }else{
              var error = new Error("L'id ou le mot de passe ne sont pas bons")
            }
          }
          callback(err, error, boolean)
        })
      }
}

module.exports = Bank;
