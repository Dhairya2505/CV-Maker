const jwt = require('jsonwebtoken');

require('dotenv').config()

const secretKey = `${process.env.SECRET_KEY}`;

function checkFromToken(req,res,next){

    try {
        const beatoken = req.headers.authorization;

        const token = beatoken.split(' ')[1];
        const user = jwt.verify(token,secretKey);
        
        if(user && user.type === 'user'){
            next();
        }
        else{
            res.status(401).json({
                msg : "Unauthorized",
            })
        }
    } catch (error) {
        res.status(404).json({
            msg : "Something went wrong",
        })
    }
    
}

module.exports = checkFromToken;