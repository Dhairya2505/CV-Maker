const express = require('express');
const path = require('path');

const SignupRoute = require('./Routes/Signup.js');
const SigninRoute = require('./Routes/Signin.js');
const detailsSubmitRoute = require('./Routes/DetailsSubmit.js')

const bodParser = require('body-parser');
const cors = require('cors');
const GetDetailsRoute = require('./Routes/GetDetails.js');
require('dotenv').config();

const { User, Details } = require('./Database/database.js');

const app = express();

app.use(cors());
app.use(bodParser.json());

app.use('/signup',SignupRoute);
app.use('/Signin',SigninRoute);
app.use('/submitDetails',detailsSubmitRoute);
app.use('/getDetails',GetDetailsRoute);


app.get('/card/:username', async (req,res) => {
    const username = req.params.username;
    
    try {
        const user = await User.findOne({
            username : username
        });
    
    
        const id = user._id;
    
        const prevDetails = await Details.findOne({
            id : id,
        })
    
        const name = prevDetails.name;
        const mail = user.gmail;
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
        const github = prevDetails.github;
        const linkedin = prevDetails.linkedin;
        const twitter = prevDetails.twitter;
    
        res.json({
            msg : "user found",
            name : name,
            mobile : mobile,
            address : address,
            gmail : mail,
            qualification : qualification,
            expertise : expertise,
            hobby : hobby,
            title1 : title1,
            title2 : title2,
            desc1 : desc1,
            desc2 : desc2,
            link1 : link1,
            link2 : link2,
            github : github,
            linkedin : linkedin,
            twitter : twitter,
            username : username
        })    
    } catch (error) {
        res.status(404).json({
            msg : "user not found",
        })
    }

    

});

const PORT = process.env.PORT || 8001;

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})