var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Classic Masonry' });
});

router.get('/Gallery', function(req, res, next) {
    res.render('Gallery', { title: 'Classic Masonry' });
});


module.exports = router;
