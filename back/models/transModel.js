const connection = require('./db_connexion.js')

// Modèle de transaction
class Transaction {
    constructor(montant, duree){
        this.montant = montant;
        this.duree = duree;
    }

    createTransaction(id_client) {
        var sql = "INSERT INTO contrat(montant, duree, id_client) VALUES(?, ?, ?)";
        con.query(sql, [this.montant, this.duree, id_client], function (err, result) {
            if (err) throw err;
        });

    }

    getAllTransaction(){
        const query = "SELECT * FROM contrat";
        con.query(sql, function (err, result) {
            if (err) throw err;
        });

    }

    static answerCredit(id_contrat, id_banque, taux){
        const query = "INSERT INTO relation_banque_client(id_contrat, id_banque) VALUES(?, ?, ?)"
        connection.query(query, [id_contrat, id_banque, taux], function(err){
            if(err) throw err;
        })
    }
}

module.exports = Transaction;