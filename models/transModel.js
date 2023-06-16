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
        const query = "INSERT INTO contrat(montant, duree) VALUES(?, ?)"
        try {
            connection.query(query, [this.montant, this.duree])
            .then(results => results.insertId);
        } catch (error) {
            throw error
        }
    }

    static 
}