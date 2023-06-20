const Transaction = require('../models/transModel');
const User = require('../models/transModel');

function createTransaction(req, res){
    
}

function answerCredit(req, res){
    const email = req.body.email
    const password = req.body.password
    Transaction.answerCredit()
}