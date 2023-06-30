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

    createTransaction() {
        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO contrat(montant, duree, statut, id_client) VALUES(?, ?, ?)";
            con.query(sql, [this.montant, this.duree, false], function (err, result) {
              if (err) throw err;
            });
          });
    }

    static answerCredit(id_contrat, id_banque){
        connection.connect(function(err){
            const query = "INSERT INTO relation_banque_client(id_contrat, id_banque) VALUES(?, ?)"
            connection.query(query, [id_contrat, id_banque], function(err){
                if(err) throw err;
            })
            query = "UPDATE contrat SET statut = ? WHERE id_contrat = ?"
            connection.query(query, [true, id_contrat], function(err){
                if(err) throw err;
            })
        })
    }
}

module.exports = Transaction;