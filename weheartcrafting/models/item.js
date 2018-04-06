var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    price: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);