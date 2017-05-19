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
        userVar.partnerName = req.body.partnerName;
        if (req.body.role) {
            userVar.role = req.body.role;
        } else {
            userVar.role = "user";
        }

        userVar.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send("User inserted");
            }
        });
    }

});

router.get("/", function(req, res) {
    console.log("req.user", req.user);
    /* User.findOne({ username: username }, function(err, user) {
     if (err) {
         console.log("error");
         return done(err);
     }
     return done(null, user);
 });
*/
    res.send(req.user);

});

module.exports = router;
