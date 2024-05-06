const CourseModel = require('../models/courseModel.js')

const getCourses = (req, res) => {
    CourseModel
        .find()
        .then((courses) => {
            res.status(200).json(courses)
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error retrieving courses', error: error })
        })
}

module.exports = { getCourses }