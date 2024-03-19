const express = require('express');

const SignupRoute = require('./Routes/Signup.js');
const SigninRoute = require('./Routes/Signin.js');

const bodParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodParser.json());

app.use('/signup',SignupRoute);
app.use('/signin',SigninRoute)

const PORT = process.env.PORT || 8001;

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})