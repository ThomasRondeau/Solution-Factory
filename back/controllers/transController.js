const Transaction = require('../models/transModel');

function createTransaction(req, res){
  // ajouter quelque chose pour empecher de recreer une nouvelle demande
    const {montant, duree }= req.body;
    newTransac = new Transaction(montant, duree)
    newTransac.createTransaction(req.session.userId, (error) => {
      if (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la transaction.' });
      } else {
        res.redirect('/credit_success')
      }
    });
}

function getTransaction(req, res) {
  Transaction.getTransaction(req.session.userId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des transactions.' });
    } else {
      res.json(result);
    }
  });
}

function getAllTrans(req, res){
  Transaction.getAllTransaction((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des transactions.' });
    } else {
      res.json(result);
    }
  });
}

function getAnswers(req, res){
  Transaction.getAnswers(req.session.userId, (err, result) => {
    console.log(err);
    res.json(result);
  })
}

function answerCredit(req, res){
    const id_contrat = req.body.id_contrat
    const id_banque = req.body.id_banque
    Transaction.answerCredit(id_contrat, id_banque, (err) =>{
      console.log(err);
    })
}


module.exports = {
  getAllTrans,
  getTransaction,
  getAnswers,
  createTransaction,
  answerCredit
};