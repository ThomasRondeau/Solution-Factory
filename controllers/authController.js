const authMiddleware = (req, res, next) => {
    if (req.session && req.session.userId) {
      // L'utilisateur est authentifié
      next();
    } else {
      // Rediriger vers la page de login
      res.redirect('/login');
    }
  };
  
  // Exportez le middleware d'authentification
  module.exports = authMiddleware;