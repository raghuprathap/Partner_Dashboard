import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import AdminDataCard from './AdminDataCard';
import NavBar from './NavBar';
export default class AdminDataDisplay extends React.Component{
	render(){
		var adminData = this.props.adminDashboardData.map(function(data){
			return(<AdminDataCard adminData={data}>

			</AdminDataCard>
			);
			
		}.bind(this));
		return(
		<div className="adminData">
		{adminData}
		</div>
		);
	}
    
}
