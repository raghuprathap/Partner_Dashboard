
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


export default class RegisterPage extends React.Component {

    /*this is a ajax function for the URL of saving of login ID and password*/
    registerFun() {
        var uname = document.getElementById('userid').value;
        var pass = document.getElementById('password').value;
        var partnerName = document.getElementById('partnerName').value;
        var data = {};
        data.username = uname;
        data.password = pass;
        data.partnerName = partnerName;

        $.ajax({
            url: "/users/add",
            type: "POST",
            data: data,
            success: function (msg) {
                console.log("successfully loged to database");
                alert("succesfully loggedin");
                browserHistory.push('/home');
            }.bind(this),
            error: function (err) {
                alert("check the username and password");
            }.bind(this)
        });
    }
    /*closed ajax function*/

    render() {
        return (
            <div>
                <h2 className="card-heading" style={{ "marginLeft": "45%" }}>Register</h2>
                <center>
                    <div className="field-line">
                        <TextField type="text" className="form-control" id="partnerName" name="Partner Name" floatingLabelText="Oragnaisation name" /><br /><br />
                    </div>
                    <div className="field-line">
                        <TextField type="text" className="form-control" id="userid" name="User name" floatingLabelText="User name" /><br /><br />
                    </div>
                    <div className="field-line">
                        <TextField type="password" className="form-control" id="password" name="Password" floatingLabelText="Password" />
                    </div>
                </center>
                <RaisedButton label="Register" onClick={this.registerFun.bind(this)} style={{ "marginLeft": "45%", "marginTop": "25px" }} />
            </div>
        )
    }
}
