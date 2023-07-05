const mysql = require('mysql');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'courtier'
  });
  connection.connect((err) => {
    if(err) throw err;
    console.log("connecté")
  })

  module.exports = connection;