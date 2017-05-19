var express = require('express');
var router = express.Router();
const request = require('superagent');
var token = "525b4f45ec945e1106298e83331c152e8ec236f47b568fd8fffc0e2d2df6b10b";
router.post("/fork", forkARepo);

function forkARepo(req, res) {
    var id = req.body.id;
    console.log('req.body.id', id);
    request
        .post('https://gitlab-dev.stackroute.in/api/v4/projects/' + id + '/fork')
        .set('Authorization', ' Bearer ' + token)
        .set('Accept', 'application/json')
        .end(function(err, resp) {
            console.log("resp", resp);
            if (err) {
                console.log("err", err);
                res.status(500).json(err);
                return;
            }
            res.json(resp.body);
        });
}

module.exports = router;
//curl --request POST --data "namespace=team_name" --header "PRIVATE-TOKEN: 525b4f45ec945e1106298e83331c152e8ec236f47b568fd8fffc0e2d2df6b10b" "https://gitlab-dev.stackroute.in/api/v4/projects/5/fork"
//curl--header "PRIVATE-TOKEN: 5f7cd3dd38515b02b91b58622e58af3aea148a354738c6943c788b7cdf8a5a33"
//https: //gitlab.stackroute.in/api/v4/namespaces
