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
        const query = "INSERT INTO contrat(montant, duree, status) VALUES(?, ?, ?)"
        try {
            connection.query(query, [this.montant, this.duree])
            .then(results => results.insertId);
        } catch (error) {
            throw error
        }
    }

    static answerCredit(id_contrat, id_banque){
        const query = "INSERT INTO relation_banque_client(id_contrat, id_banque) VALUES(?, ?)"
        try {
            connection.query(query, [id_contrat, id_banque])
            .then(results => results.insertId);
        } catch (error) {
            throw error
        }
        query = "UPDATE table_name SET column1 = value1, WHERE "
        try {
            connection.query(query, [id_contrat, id_banque])
            .then(results => results.insertId);
        } catch (error) {
            throw error
        }
    }
}

module.exports = Transaction;