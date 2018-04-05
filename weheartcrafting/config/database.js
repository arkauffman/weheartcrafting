var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;

db.once('open', () => {
    console.log(`Mongoose connected to ${db.name}`);
});

module.exports = mongoose;

