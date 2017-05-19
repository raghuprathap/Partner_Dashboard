var express = require('express');
var router = express.Router();
var partnerDetailsSchema = require('../model/partnerDetails');

router.post('/add', (req, res) => {
    var partnerDetails = new partnerDetailsSchema();
    partnerDetails.partnerName = req.body.partnerName;
    partnerDetails.ISBN = req.body.ISBN;
    partnerDetails.courseName = req.body.courseName;
    partnerDetails.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.json(partnerDetails);
        }

    });
});

router.get('/get', (req, res) => {
    partnerDetailsSchema.find({}, (err, partnerDetails) => {
        if (err) {
            res.send(err);
        } else {
            res.json(partnerDetails);
        }

    });
});

module.exports = router;
