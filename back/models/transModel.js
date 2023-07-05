const connection = require('./db_connexion.js')

// Modèle de transaction
class Transaction {
    constructor(montant, duree){
        this.montant = montant;
        this.duree = duree;
    }

    createTransaction(id_client, callback) {
        var query = "INSERT INTO contrat(montant, duree, id_client) VALUES(?, ?, ?)";
        connection.query(query, [this.montant, this.duree, id_client], function (err, result) {
            callback(err)
        });
    }

    getAllTransaction(){
        const query = "SELECT * FROM contrat";
        connection.query(query, function (err, result) {
            if (err) throw err;
        });
    }

    static getTransaction(id_client, callback){
        const query = "SELECT * FROM contrat WHERE id_client = ?"
        connection.query(query, [id_client], function(err, result){
            callback(err, result)
        })
    }

    static getAnswers(id_client, callback){
        const query = "SELECT * FROM relation_banque_client WHERE id_client = ?"
        connection.query(query, [id_client], function(err, result){
            callback(err, result)
        })
        
    }

    static answerCredit(id_contrat, id_banque, taux, callback){
        const query = "INSERT INTO relation_banque_client(id_contrat, id_banque) VALUES(?, ?, ?)"
        connection.query(query, [id_contrat, id_banque, taux], function(err){
            callback(err)
        })
    }
}

module.exports = Transaction;