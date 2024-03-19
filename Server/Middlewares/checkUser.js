const { User } = require("../Database/database.js");

async function checkUser(req,res,next){

    const gmail = req.headers.gmail;
    const password = req.headers.password;
    
    const user = await User.findOne({
        gmail : gmail,
        password : password
    });
    
    if(!user){
        res.status(401).send('*Gmail or password incorrect');
    }
    else{
        next();
    }

}

module.exports = checkUser;