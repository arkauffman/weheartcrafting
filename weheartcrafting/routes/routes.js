var express = require('express');
var router = express.Router();

router.get('/about', function(req, res) {
    console.log('++++++++++++')
    res.json('hello!!!!!');
});

router.get('/item/:id', function(req, res) {
    res.send('hello!');
});


module.exports = router;