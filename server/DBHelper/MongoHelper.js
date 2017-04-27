var MongoClient = require('mongodb').MongoClient;
var modelMap = {
    "CourseModel": "course",
    "EnrolledCoursesModel": "enrolled_courses",
}

MongoClient.connect("mongodb://localhost/percp_scope_1" + "?", {
    server: {
        poolSize: 20
    }
}, function(err, db) {
    if (err) {
        console.log(err);
        console.log('Mongodb default connection open to ' + "mongodb://localhost/percp_scope_1", err);
    } else {
        dbConn = db;
        //console.log("dbConn", dbConn);
    }


});

exports.find = function(modelName, query, projection, options) {
    if (!query) {
        query = {};
    }
    if (!projection) {
        projection = {};
    }
    if (!options) {
        options = {};
    }
    if (modelMap[modelName] == null || modelMap[modelName] == 'undefined') {
        console.log('Incorrect model:find():', modelName);
    }
    return dbConn.collection(modelMap[modelName]).find(query, projection, options);
}
