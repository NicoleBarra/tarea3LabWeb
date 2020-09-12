let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidators');
let passport = require('passport');
const {userAuthCheck} = require('../checkAuth');

router.get('/', homepageController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);

router.post('/register', authValidator.store, authController.store);
router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/app/dashboard' }));

router.get('/login-fail', (req, res) => {
  res.send('El usuario no tiene una sesión válida');
});

router.get('/app/dashboard', (req, res, next) => {
  if(req.isAuthenticated()) return next();

  res.redirect('/register');
 }, homepageController.dashboard);
router.get('/app/users', userAuthCheck, homepageController.users);

module.exports = router;
