import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import TextField from 'material-ui/TextField';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';
import NavBar from './NavBar';

export default class AdminDataCard extends React.Component{
	render(){
		return(
            <div>
            
			<Card initiallyExpanded={true}>
                                <CardHeader
                                    title= {'Course Name : ' + this.props.adminData.courseName}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                    />

                                <CardText expandable={true}>
                                    {'ISBN : ' + this.props.adminData.ISBN} 
                                    {'Partner Name : ' + this.props.adminData.partnerName}
                                </CardText>
                            </Card>
        </div>
		)
	}
}