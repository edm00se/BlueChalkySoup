var express = require('express'),
	router = express.Router(),
    auth = require('http-auth');

// Configure basic auth
var basic = auth.basic({
    realm: 'SUPER SECRET STUFF'
}, function(username, password, callback) {
    callback(username == 'admin' && password == 'someAmazingP@$$w0rd');
});

var authMiddleware = auth.connect(basic);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Chalky Soup' });
});

/* GET controller page. */
router.get('/control', authMiddleware, function(req, res) {
	res.render('control', { title: 'Chalky Soup Spoon' });
});

module.exports = router;
