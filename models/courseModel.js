const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    id: Number,
    title: String,
    paragraphs: [String]
})

const CourseModel = mongoose.model('Course', courseSchema)
module.exports = CourseModel