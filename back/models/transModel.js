const mysql = require('mysql');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'courtier'
});

// Modèle de transaction
class Transaction {
    constructor(montant, duree){
        this.montant = montant;
        this.duree = duree;
    }

    createTransaction(id_client) {
        connection.connect(function(err) {
            if (err) throw err;
            var sql = "INSERT INTO contrat(montant, duree, id_client) VALUES(?, ?, ?)";
            con.query(sql, [this.montant, this.duree, id_client], function (err, result) {
              if (err) throw err;
            });
          });
    }

    getAllTransaction(){
        connection.connect(function(err){
            if(err) throw err;
            const query = "SELECT * FROM contrat"
        })
    }

    static answerCredit(id_contrat, id_banque){
        connection.connect(function(err){
            const query = "INSERT INTO relation_banque_client(id_contrat, id_banque) VALUES(?, ?)"
            connection.query(query, [id_contrat, id_banque], function(err){
                if(err) throw err;
            })
        })
    }
}

module.exports = Transaction;