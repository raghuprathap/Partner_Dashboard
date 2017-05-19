import React from 'react';
import AdminDataDisplay from './AdminDataDisplay.jsx';
export default class CourseAdminView extends React.Component{
	constructor(props){
        super(props);
        this.state = {adminDashboardData : {}}
    }
    componentDidMount() {
    	
        	$.ajax({url: "/partnerDetails/get",
            	type: "GET",
            	success: function (msg) {
                	this.state.adminDashboardData = msg;
                	this.getData();
            	}.bind(this),
            	error: function (err) {
                	browserHistory.push('/login');
            }.bind(this)})

		
    }

    getData(){
    	var adminData = this.state.adminDashboardData.map(function(data){
			return(
				
					<AdminDataDisplay
						allData={data}>
					</AdminDataDisplay>

				)

		});
		return adminData;
    }

    render(){
		
		
		return(
      
    );
	}

	
}