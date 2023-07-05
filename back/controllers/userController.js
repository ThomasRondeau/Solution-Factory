const User = require('../models/userModel');

// Contrôleur pour créer un nouvel utilisateur
function createUser(req, res) {
    const { nom, prenom, email, password, birthdate, city }= req.body;
    newUser = new User(nom, prenom, email, password, birthdate, city)
    newUser.createUser((error) => {
    if (error) {
      res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur.' });
    } else {
      res.status(200).json({ message: 'Utilisateur créé avec succès.', user: newUser });
    }
  });
}

function getUser(req, res){
    const userId = req.body.id;
    try {
        return User.getUser(userId)
    } catch (error) {
        console.log(error)
    }
}

// Contrôleur pour login
function loginUser(req, res) {
  const email = req.body.email
  const password = req.body.password
    try {
        req.session.userId = User.loginUser(email, password)
        req.session.typeOfUser = "client"
    } catch (error) {
        console.log(error)
    }
}

function logoutUser(req, res){
    req.session.destroy()
    res.redirect('/accueil')
}

module.exports = {
  createUser,
  getUser,
  loginUser,
  logoutUser
};