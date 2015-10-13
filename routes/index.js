var express = require('express');
var router = express.Router();

var messages = [
	{
		name: 'Fred',
		msg: 'Hello'
	},
	{
		name: 'Stacy',
		msg: 'Yeah!'
	}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
	  title: 'GuestBook',
	  messages: messages
  });
});

router.get('/post', function(req, res, next) {
  res.render('post', {
	  title: 'GuestBook'
  });
});

router.post('/post', function(req, res, next) {
	messages.push({
		name: req.body.name,
		msg: req.body.msg
	});

	res.redirect('/');
});

module.exports = router;
