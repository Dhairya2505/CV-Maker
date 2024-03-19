const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
    gmail : String,
    username : String,
    password : String,
});

const detailsSchema = new mongoose.Schema({
    id : String,
    name : String,
    mobile : String,
    address : String,
    qualification : String,
    expertise : String,
    hobby : String,
    title1 : String,
    desc1 : String,
    link1 : String,
    title2 : String,
    desc2 : String,
    link2 : String,
})

const User = mongoose.model('User',userSchema);

const Details = mongoose.model('Details',detailsSchema);

module.exports = {
    User,
    Details
}
