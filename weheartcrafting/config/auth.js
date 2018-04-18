// const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = (req,res,next) => {
    let token = req.body.token || req.query.token || req.get('Authorization')
    if(token) {
        token = token.replace('Bearer ','');
        jwt.verify(token, SECRET, (err, decode) => {
            if(!err) {
                req.user = decode.user;
                next();
            }
        });
    } else {
        next()
    }
}