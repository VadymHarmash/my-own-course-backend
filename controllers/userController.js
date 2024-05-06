const UserModel = require('../models/userModel.js')

const getUsers = (req, res) => {
    UserModel
        .find()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error retrieving users', error: error })
        })
}

module.exports = { getUsers }