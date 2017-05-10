var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Tutor Register page. */
router.get('/Hanyang_Seoul', function(req, res, next) {
  res.render('univ', { univName: '한양대학교(서울)' });
});

router.get('/Hanyang_ERICA', function(req, res, next) {
  res.render('univ', { univName: '한양대학교(ERICA)' });
});

module.exports = router;
