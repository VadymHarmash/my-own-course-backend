const CourseModel = require('../models/courseModel.js')

const createCourse = (req, res) => {
    const courseData = req.body
    const newCourse = new CourseModel(courseData)

    newCourse.save()
        .then(() => {
            res.status(201).json({ message: 'Course added successfully' })
        })
        .catch(error => {
            res.status(500).json({ message: 'Error adding course', error: error })
        })
}

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

module.exports = { getCourses, createCourse }