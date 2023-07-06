const Bank = require('../models/bankModel');

function loginBank(req, res) {
    const id = req.body.id
    const password = req.body.password
    var lancement = Bank.loginBank(id, password, (err, err_id, boolean) => {
        if(boolean){
            req.session.userId = id
            req.session.typeOfUser = "banque"
            res.redirect('/answer_offre');
        }else{
            res.send('Mauvais identifiant ou mot de passe')
        }
        console.log(err, err_id)
    })
}

module.exports = {loginBank};