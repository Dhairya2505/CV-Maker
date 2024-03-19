const { User } = require("../Database/database");

async function checkForDuplicacy(req,res,next){
    try {

        const username = req.body.username;
        const gmail = req.headers.gmail;

        const user = await User.findOne({
            username : username
        });

        const user1 = await User.findOne({
            gmail : gmail
        });

        const user2 = await User.findOne({
            username : username,
            gmail : gmail
        });

        if(user2){
            res.status(403).send('*User already exists');
        }
        else if(user1){
            res.status(403).send('*Gmail already in use');
        }
        else if(user){
            res.status(403).send('*Username taken');
        }
        else{
            next();
        }

    } catch (error) {
        res.send('Something went wrong');
    }
}

module.exports = { checkForDuplicacy };