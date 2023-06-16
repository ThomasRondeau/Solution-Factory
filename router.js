const express = require('express')
const router = express.Router()

//récupération des controllers
const  { 
    createUser,
    loginUser,
    logoutUser,
    getUser
} = require('./controllers/userController.js')

const  { 
    createCredit,
    answerCredit
} = require('./controllers/transController.js')

const loginBank = require('./controllers/bankController.js')

//redirect
router.get('/', (req, res) => {
    res.redirect('/accueil');
});

// pour le userController
router.post('/register', createUser)
router.post('/login_client', loginUser)
router.post('/logout', logoutUser)
router.post('/getprofile', getUser) // à implémenter pour faire une page profil, mais voir pour utiliser Vue js

// pour le bankController
router.post('/login_banque', loginBank)

// pour le transController
router.post('/credit', createCredit)
router.post('/answer_credit', answerCredit)

module.exports = router