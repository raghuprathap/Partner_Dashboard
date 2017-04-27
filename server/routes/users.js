var express = require('express');
var router = express.Router();
var User = require('../model/user');

router.post("/add", function(req, res) {
    console.log("Hello");
    console.log('req.body', req.body);
    if (req.body) {
        var userVar = new User();
        userVar.username = req.body.username;
        userVar.password = req.body.password;
        userVar.save(function(err) {
            console.log("inside insert1111");
            if (err) {
                console.log("inside error");
                res.send(err);
            } else {
                console.log("inside insert");
                res.send("User inserted");
            }
        });
    }

});

module.exports = router;
