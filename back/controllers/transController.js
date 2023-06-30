const Transaction = require('../models/transModel');

function createTransaction(req, res){
    const {montant, duree }= req.body;
    newTransac = new Transaction(montant, duree)
    newTransac.createTransaction((error) => {
        if (error) {
          res.status(500).json({ error: 'Erreur lors de la création de la transaction.' });
        } else {
          res.status(200).json({ message: 'Transaction créé avec succès.', user: newUser });
        }
      });


}

function answerCredit(req, res){
    const id_contrat = req.body.id_contrat
    const id_banque = req.body.id_banque
    try {
        Transaction.answerCredit(id_contrat, id_banque)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
  createTransaction,
  answerCredit
};