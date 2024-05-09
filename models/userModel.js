const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    password: String,
    mobile: String,
    isAdmin: Boolean
})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel