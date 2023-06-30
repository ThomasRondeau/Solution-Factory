const express = require('express')
const router = express.Router()
const path = require('path')

//récupération des controllers
const  { 
    createUser,
    loginUser,
    logoutUser,
    getUser
} = require('./controllers/userController.js')

const  { 
    createTransaction,
    answerCredit
} = require('./controllers/transController.js')

const {loginBank} = require('./controllers/bankController.js')

const htmlPath = path.join(__dirname, '../front/html');

//redirect
router.get('/', (req, res) => {
    res.redirect('/accueil');
});


// tous les gets
router.get('/accueil', (req, res) => {
    res.sendFile('index.html', { root : htmlPath})
})
router.get('/consulter_demande', (req, res) => {
    res.sendFile('consulter_demande.html', { root : htmlPath})
})
router.get('/create_credit', (req, res) => {
    res.sendFile('create_credit.html', { root : htmlPath})
})
router.get('/login', (req, res) => {
    res.sendFile('login.html', { root : htmlPath})
})
router.get('/register', (req, res) => {
    res.sendFile('register.html', { root : htmlPath})
})
router.get('/answer_offre', (req, res) => {
    res.sendFile('answer_offre.html', { root : htmlPath})
})


// pour le userController
router.post('/register', createUser)
router.post('/login_client', loginUser)
router.post('/logout', logoutUser)
router.post('/getprofile', getUser) // à implémenter pour faire une page profil

// pour le bankController
router.post('/login_banque', loginBank)

// pour le transController
router.post('/credit', createTransaction)
router.post('/getalltransactions', )
router.post('/answer_credit', answerCredit)

module.exports = router