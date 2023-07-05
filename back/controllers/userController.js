const User = require('../models/userModel');

// Contrôleur pour créer un nouvel utilisateur
function createUser(req, res) {
  const { nom, prenom, email, password, birthdate, city } = req.body;
  const newUser = new User(nom, prenom, email, password, birthdate, city);

  newUser.createUser((error) => {
    if (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      return res.status(500).send('Erreur lors de la création de l\'utilisateur.');
    }

    console.log('L\'utilisateur a été créé avec succès');
    res.redirect('/accueil');
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
  var lancement = User.loginUser(email, password, (error_id, boolean, result) =>{

    console.log('error_id : ', error_id)
    if(boolean){
      req.session.typeOfUser = "client"
      req.session.userId = result
      res.redirect('/accueil')
    }else{
      res.send("Identifiant et/ou mot de passe incorrects")
    }
  })
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