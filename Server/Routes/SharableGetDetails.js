const { Router } = require('express');
const checkFromToken = require('../Middlewares/checkFromToken.js');
const { User, Details } = require('../Database/database.js');

const SharableGetDetailsRoute = Router();

SharableGetDetailsRoute.get('/',checkFromToken, async (req,res) => {
    const username = req.params.username;

    console.log(username);

    // const prsn = await User.findOne({
    //     gmail : mail,
    // });

    // const id = prsn._id;

    // const prevDetails = await Details.findOne({
    //     id : id,
    // })

    // if(prevDetails){
    //     const name = prevDetails.name;
    //     const mobile = prevDetails.mobile;
    //     const address = prevDetails.address;
    //     const qualification = prevDetails.qualification;
    //     const expertise = prevDetails.expertise;
    //     const hobby = prevDetails.hobby;
    //     const title1 = prevDetails.title1;
    //     const title2 = prevDetails.title2;
    //     const desc1 = prevDetails.desc1;
    //     const desc2 = prevDetails.desc2;
    //     const link1 = prevDetails.link1;
    //     const link2 = prevDetails.link2;
    //     const github = prevDetails.github;
    //     const linkedin = prevDetails.linkedin;
    //     const twitter = prevDetails.twitter;
    //     const username = prsn.username;
    
    //     res.json({
    //         msg : "old user",
    //         name : name,
    //         mobile : mobile,
    //         address : address,
    //         gmail : mail,
    //         qualification : qualification,
    //         expertise : expertise,
    //         hobby : hobby,
    //         title1 : title1,
    //         title2 : title2,
    //         desc1 : desc1,
    //         desc2 : desc2,
    //         link1 : link1,
    //         link2 : link2,
    //         github : github,
    //         linkedin : linkedin,
    //         twitter : twitter,
    //         username : username
    //     })
    // }
    // else{
    //     res.json({
    //         msg : "new user"
    //     })
    // }




})

module.exports = SharableGetDetailsRoute;