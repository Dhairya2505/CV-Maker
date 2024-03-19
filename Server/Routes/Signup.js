const Router = require('express');
const { checkForDuplicacy } = require('./../Middlewares/checkForDuplicacy.js')
const { User } = require('../Database/database.js');

const SignupRoute = Router();

SignupRoute.post('/',checkForDuplicacy,(req,res) => {
    
    try {
        const username = req.body.username;
        const gmail = req.headers.gmail;
        const password = req.headers.password;
        
        const user = new User({
            gmail : gmail,
            username : username,
            password : password
        })

        user.save();

        res.json({
            msg : 'User created Successfully',
        });

    } catch (error) {
        res.status(400).json({
            msg : 'Something went wrong',
        })
    }



});

module.exports = SignupRoute;
