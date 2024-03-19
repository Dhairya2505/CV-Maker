const express = require('express');
const path = require('path');

const SignupRoute = require('./Routes/Signup.js');
const SigninRoute = require('./Routes/Signin.js');
const detailsSubmitRoute = require('./Routes/DetailsSubmit.js')

const bodParser = require('body-parser');
const cors = require('cors');
const GetDetailsRoute = require('./Routes/GetDetails.js');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodParser.json());

app.use('/signup',SignupRoute);
app.use('/Signin',SigninRoute);
app.use('/submitDetails',detailsSubmitRoute);
app.use('/getDetails',GetDetailsRoute);

const PORT = process.env.PORT || 8001;

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})