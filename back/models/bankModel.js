const connection = require('./db_connexion.js')

class Bank{
    static loginBank(id, password){
        const query = `SELECT password FROM banque WHERE id_banque = ?`;
        connection.connect(function(err){
            if(err) throw err;
            connection.query(query, [id], function(err, results){
                if (results.length > 0 && password == results[0].password) {
                    return id
                } else {
                    throw new Error("L'id ou le mot de passe ne sont pas bons");
                }
            })
        })
    }
}

module.exports = Bank;
