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

const editCourse = (req, res) => {
    const { id } = req.params
    const { paragraphs } = req.body
    CourseModel
        .findByIdAndUpdate(
            id,
            { paragraphs: paragraphs },
            { new: true }
        )
        .then(updatedCourse => {
            if (!updatedCourse) {
                return res.status(404).json({ message: 'Course changing error' });
            }
            res.status(200).json(updatedCourse);
        })
        .catch(error => {
            console.error('Error updating course:', error);
            res.status(500).json({ message: 'Error updating course', error: error });
        });
};


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

const deleteCourse = (req, res) => {
    const courseId = req.params.id
    CourseModel
        .findByIdAndDelete(courseId)
        .then(() => {
            res.status(200).json({ message: 'Course deleted successfully' })
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error deleting course', error: error })
        })
}

module.exports = { getCourses, createCourse, editCourse, deleteCourse }