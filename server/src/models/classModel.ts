var mongoose = require('mongoose')

var classSchema = new mongoose.Schema({
    teacherId: String,
    teacherName: String,
    name: String,
    description: String,
    students: Array,
    classCode: String,
    assignedDecks: Array,
})

module.exports = new mongoose.model('classes', classSchema)