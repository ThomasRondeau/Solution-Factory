const Bank = require('../models/bankModel');

function loginBank(req, res) {
    const id = req.body.id
    const password = req.body.password
    try {
        req.session.userId = Bank.loginBank(id, password)
        req.session.typeOfUser = "client"
    } catch (error) {
        console.log(error)
    }
}

module.exports = {loginBank};