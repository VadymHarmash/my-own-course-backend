require('dotenv').config()

const express = require('express')
const app = express()
const courseController = require('./controllers/courseController')
const userController = require('./controllers/userController')
const connectDB = require('./db')

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

connectDB()

app.post('/courses', courseController.createCourse)
app.get('/courses', courseController.getCourses)
app.post('/users', userController.createUser)
app.get('/users', userController.getUsers)
app.post('/users/:userId/completedCourses', userController.addCompletedCourse)
app.delete('/courses/:id', courseController.deleteCourse)
app.post('/courses/:id/paragraphs', courseController.editCourse)

app.listen(PORT, (err) => err ? console.log(err) : console.log(`Listening port ${PORT}`))
