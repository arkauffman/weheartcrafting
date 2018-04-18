const express = require('express');
const router = express.Router();
const itemController = require('../../controllers/items')

router.get('/', itemController.getItems)

router.get('/:id', function(req, res) {
    res.send('hello!');
});


module.exports = router;