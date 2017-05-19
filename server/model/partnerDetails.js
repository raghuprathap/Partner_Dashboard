var mongoose = require('mongoose');
var Schema = mongoose.Schema

var partnerDetails = new Schema({
    partnerName: String,
    ISBN: Number,
    courseName: String,
});

module.exports = mongoose.model('partnerDetails', partnerDetails);
