var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login/login_page', { title: 'Express' });
});

/* GET Tutor Register page. */
router.get('/tutor_register', function(req, res, next) {
  res.render('tutor_register', { title: 'Express' });
});

/* GET Tutor Register page. */
router.get('/univ', function(req, res, next) {
  res.render('univ', { title: 'Express' });
});

module.exports = router;
