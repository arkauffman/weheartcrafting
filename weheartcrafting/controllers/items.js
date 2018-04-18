var Item = require('../models/Item');
var request = require('request');

function getItems(req, res) {
    Item.find({}, (err, items) => {
        if(err) {
            console.log(err)
        }
        return Promise.resolve(res.json(items))
    })
}

module.exports = {
    getItems
}