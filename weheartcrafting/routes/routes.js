var express = require('express');
var router = express.Router();


router.get('/about', function(req, res) {
    return res.send('hello!!!!!');
});

router.get('/item/:id', function(req, res) {
    return res.send('hello!');
});


module.exports = router;