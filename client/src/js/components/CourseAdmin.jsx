import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';
import NavBar from './NavBar';

export default class CourseAdmin extends React.Component{
	saveCourseAdminData(){
		var data = {};
		data.partnerName = document.getElementById('partnerName').value;
        data.ISBN = document.getElementById('ISBN').value;
        data.courseName = document.getElementById('courseName').value;
        $.ajax({url: "/partnerDetails/add",
            type: "POST",
            data: data,
            success: function (msg) {
                browserHistory.push('/dashboard');
            }.bind(this),
            error: function (err) {
                browserHistory.push('/login');
            }.bind(this)})

	}
	render(){
		return(
            <div>
            <div className="row">
                    <div className="col-md-12"><NavBar /></div>
                </div>
			<div>
                <h2 className="card-heading" style={{ "marginLeft": "45%" }}>Partner details</h2>
                <center>
                    <div className="field-line">
                        <TextField type="text" className="form-control" id="partnerName" name="Partner Name" floatingLabelText="Partner name" /><br /><br />
                    </div>
                    <div className="field-line">
                        <TextField type="text" className="form-control" id="ISBN" name="ISBN" floatingLabelText="ISBN" /><br /><br />
                    </div>
                    <div className="field-line">
                        <TextField type="text" className="form-control" id="courseName" name="courseName" floatingLabelText="Course name" />
                    </div>
                </center>
                <RaisedButton label="save" onClick={this.saveCourseAdminData.bind(this)} style={{ "marginLeft": "45%", "marginTop": "25px" }} />

            </div>
            </div>
		)
	}
}