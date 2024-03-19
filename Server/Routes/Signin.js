const { Router } = require('express');
const checkUser = require('../Middlewares/checkUser.js');
const jwt = require('jsonwebtoken');

require('dotenv').config()

const secretKey = process.env.SECRET_KEY;


const SigninRoute = Router();

SigninRoute.post('/',checkUser,(req,res) => {
    
    const gmail = req.headers.gmail;
    
    const token = jwt.sign({
        gmail : gmail,
        type : 'user'
    },secretKey); 
    
    res.json({
        token : `Bearer ${token}`
    });
})

module.exports = SigninRoute;