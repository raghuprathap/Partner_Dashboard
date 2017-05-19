var mongoose = require('mongoose');
var schema = mongoose.schema

var courses = new schema({
    partnerName: String,
    courseName: String,
    batchNumber: Number,
    noOfParticipants: Number
});

module.exports = mongoose.model('courses', courses);
