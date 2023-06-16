const User = require('../models/userModel');

// Contrôleur pour créer un nouvel utilisateur
function createUser(req, res) {
    const { nom, prenom, email, password, birthdate, city }= req.body;

  User.createUser({ nom, prenom, email, password, birthdate, city }, (error, newUser) => {
    if (error) {
      res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur.' });
    } else {
      res.status(200).json({ message: 'Utilisateur créé avec succès.', user: newUser });
    }
  });
}

// Contrôleur pour login
function loginUser(req, res) {
  const userId = req.params.id;

  User.loginUser(userId, (error, user) => {
    if (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur.' });
    } else if (!user) {
      res.status(404).json({ error: 'Utilisateur non trouvé.' });
    } else {
      res.status(200).json({ user });
    }
  });
}

module.exports = {
  createUser,
  getUser,
};