const mongoose = require('mongoose');
require('dotenv').config({path : `${__dirname}/../../.env`});

mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
    gmail : String,
    username : String,
    password : String,
});

const User = mongoose.model('User',userSchema);

module.exports = {
    User
}
