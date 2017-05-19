
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

export default class LoginPage extends React.Component {

    /*this is a ajax function for the URL of saving of login ID and password*/
    Loginfun() {
        var uname = document.getElementById('userid').value;
        var pass = document.getElementById('password').value;
        var data = {};
        data.username = uname;
        data.password = pass;

        $.ajax({
            url: "/login",
            type: "POST",
            data: data,
            success: function (msg) {
                browserHistory.push('/dashboard');
            }.bind(this),
            error: function (err) {
                browserHistory.push('/login');
            }.bind(this)
        });

    }
    /*closed ajax function*/



    render() {
        return (
            <div>

                <h2 className="card-heading loginText" style={{ "marginLeft": "45%" }}>Login</h2>
                <center>
                    <div className="field-line">
                        <TextField type="text" className="form-control" id="userid" name="User name" floatingLabelText="User name" /><br /><br />
                    </div>
                    <div className="field-line">
                        <TextField type="password" className="form-control" id="password" name="Password" floatingLabelText="Password" />
                    </div>
                </center>
                <RaisedButton label="Log in" onClick={this.Loginfun.bind(this)} style={{ "marginLeft": "45%", "marginTop": "25px"}} />

            </div>


        )
    }
}
