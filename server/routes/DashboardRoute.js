var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var MongoHelper = require('../DBHelper/MongoHelper');
var promise_lib = require('when');
router.get("/partnerDashborad", getEnrolledCourses);

function getEnrolledCourses(req, res) {
    var deferred = promise_lib.defer();
    var enrolCourses;
    var courses;
    var dashboardData = {};
    promise_lib.resolve().then(function() {
            var deferred = promise_lib.defer();
            MongoHelper
                .find('CourseModel', {}).toArray(function(err, course) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        courses = course;
                        deferred.resolve(courses);
                    }
                });
            return deferred.promise;
        }).then(function() {
            var deferred = promise_lib.defer();
            MongoHelper.find('EnrolledCoursesModel', {}).toArray(function(err, enrolledCourse) {
                if (err) {
                    deferred.reject(err);
                } else {
                    enrolCourses = enrolledCourse;

                    for (var i in enrolCourses) {
                        for (var j in courses) {
                            if (enrolCourses[i].course_id === courses[j].identifier) {
                                dashboardData["courseName"] = courses[j].name;
                                dashboardData["numberOfStudents"] = i;
                            }
                        }
                    }
                    deferred.resolve(dashboardData);
                }
            });
            return deferred.promise;
        }).then(function() {
            console.log(dashboardData["courseName"]);
            res.send(dashboardData);
        })
        .catch(function(err) {
            res.status(500).send('Error - ' + err);
        }).done();



}

/*function getCourse() {
    var deferred = promise_lib.defer();
    //console.log("inside : ", getCourse);
    var courses;

}
*/



module.exports = router;
