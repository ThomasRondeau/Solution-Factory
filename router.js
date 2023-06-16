const express = require('express')
const router = express.Router()

//récupération des controllers
const  { 
    createUser,
    loginUser
} = require('./controllers/userController.js')

const  { 
    createCredit,
    answerCredit
} = require('./controllers/transController.js')

const loginBank = require('./controllers/bankController.js')

// pour le userController

router.post('/register', createUser)

router.post('/login_client', loginUser)

// pour le bankController

router.post('/login_banque', loginBank)

// pour le transController

router.post('/credit', createCredit)

router.post('/answer_credit', answerCredit)

module.exports = router