import React from 'react';
import AdminDataDisplay from './AdminDataDisplay.jsx';
import $ from 'jquery';
import NavBar from './NavBar';
export default class CourseAdminView extends React.Component{
	constructor(props){
				console.log("##############");
        super(props);
        this.state = {adminDashboardData : []}
    }

componentDidMount(){
		$.ajax({
			url: "/partnerDetails/get",
			type: 'GET',
			dataType: 'JSON',
			success: function(data) {
				var adminDataArr = [];
				data.map(function(value){
					console.log(value);
					adminDataArr.push(value);
				});
				//this.state.adminDashboardData = adminDataArr;
				this.setState({adminDashboardData:adminDataArr});
				console.log("AdminDataDisplay1", this.state.adminDashboardData);
			}.bind(this),
			error: function(err) {
				console.log(err);
			}.bind(this)
		});
	}

	/*componetDidMount(){
		console.log("AdminDataDisplay1");
    	$.ajax({
    		url: "/partnerDetails/get",
        type: "GET",
        dataType: 'JSON',
        success: function (msg) {
        	console.log("AdminDataDisplay2");
         	this.state.adminDashboardData = msg;
        }.bind(this),
         	error: function (err) {
        	console.log("AdminDataDisplay3");
         	browserHistory.push('/login');
        }.bind(this)});
    }*/

    render() {
    	if(this.state.adminDashboardData.length > 0){
    		return (
            <div>
            <div className="row">
                    <div className="col-md-12"><NavBar /></div>
                </div>
    		<div>
    		<AdminDataDisplay adminDashboardData={this.state.adminDashboardData}/>
    		</div>
            </div>
    	)
    	}else{
    		return(
                <div>
                <div className="row">
                    <div className="col-md-12"><NavBar /></div>
                </div>
                <div>"loading"</div>
                </div>
                );
    	}
    	
    }
}
  