const { Router } = require('express')
const jwt = require('jsonwebtoken');
const checkFromToken = require('./../Middlewares/checkFromToken.js');
const { User, Details } = require('../Database/database.js');

require('dotenv').config()
const secretKey = process.env.SECRET_KEY;


const detailsSubmitRoute = Router();

detailsSubmitRoute.post('/',checkFromToken,async (req,res)=>{

    const beatoken = req.headers.authorization;
    const token = beatoken.split(' ')[1];

    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const qualification = req.body.qualification;
    const expertise = req.body.expertise;
    const hobby = req.body.hobby;
    const title1 = req.body.title1;
    const title2 = req.body.title2;
    const desc1 = req.body.desc1;
    const desc2 = req.body.desc2;
    const link1 = req.body.link1;
    const link2 = req.body.link2;

    
    const user = jwt.verify(token,secretKey);

    const mail = user.gmail;

    const prsn = await User.findOne({
        gmail : mail,
    });

    const id = prsn._id;

    const prevDetails = await Details.findOne({
        id : id,
    })
    
    if(!prevDetails){
        const detail = new Details({
            id : id,
            name : name,
            mobile : mobile,
            address : address,
            qualification : qualification,
            expertise : expertise,
            hobby : hobby,
            title1 : title1,
            desc1 : desc1,
            link1 : link1,
            title2 : title2,
            desc2 : desc2,
            link2 : link2,
        });
    
        detail.save();
    }
    else{
        await Details.updateOne({
            id : id
        },{
            name : name,
            mobile : mobile,
            address : address,
            qualification : qualification,
            expertise : expertise,
            hobby : hobby,
            title1 : title1,
            desc1 : desc1,
            link1 : link1,
            title2 : title2,
            desc2 : desc2,
            link2 : link2,
        });
    }
    
    res.json({
        msg : 'Details saved successfully',
    })
})

module.exports = detailsSubmitRoute;