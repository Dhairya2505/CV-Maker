const { Router } = require('express');
const checkFromToken = require('../Middlewares/checkFromToken.js');
const { User, Details } = require('../Database/database.js');
const jwt = require('jsonwebtoken');

require('dotenv').config()

const secretKey = `${process.env.SECRET_KEY}`;

const GetDetailsRoute = Router();

GetDetailsRoute.get('/',checkFromToken, async (req,res) => {
    const beatoken = req.headers.authorization;
    const token = beatoken.split(' ')[1];
    const user = jwt.verify(token,secretKey);

    const mail = user.gmail;

    const prsn = await User.findOne({
        gmail : mail,
    });

    const id = prsn._id;

    const prevDetails = await Details.findOne({
        id : id,
    })

    const name = prevDetails.name;
    const mobile = prevDetails.mobile;
    const address = prevDetails.address;
    const qualification = prevDetails.qualification;
    const expertise = prevDetails.expertise;
    const hobby = prevDetails.hobby;
    const title1 = prevDetails.title1;
    const title2 = prevDetails.title2;
    const desc1 = prevDetails.desc1;
    const desc2 = prevDetails.desc2;
    const link1 = prevDetails.link1;
    const link2 = prevDetails.link2;

    res.json({
        name : name,
        mobile : mobile,
        address : address,
        qualification : qualification,
        expertise : expertise,
        hobby : hobby,
        title1 : title1,
        title2 : title2,
        desc1 : desc1,
        desc2 : desc2,
        link1 : link1,
        link2 : link2,
    })


})

module.exports = GetDetailsRoute;