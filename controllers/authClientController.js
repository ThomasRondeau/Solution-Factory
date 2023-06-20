const authClientMiddleware = (req, res, next) => {
    if (req.session && req.session.userId  && req.session.typeOfUser == "client") {
      // L'utilisateur est authentifié
      next();
    } else {
      // Rediriger vers la page de login
      res.redirect('/login');
    }
  };
  
  // Exportez le middleware d'authentification
  module.exports = authClientMiddleware;