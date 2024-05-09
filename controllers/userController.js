const UserModel = require('../models/userModel.js')

const createUser = (req, res) => {
    const userData = req.body
    const newUser = new UserModel(userData)

    newUser.save()
        .then(() => {
            res.status(201).json({ message: 'User added successfully' })
        })
        .catch(error => {
            res.status(500).json({ message: 'Error adding user', error: error })
        })
}

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

module.exports = { createUser, getUsers }