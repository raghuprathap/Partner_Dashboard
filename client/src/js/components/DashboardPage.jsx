import React from 'react';
import NavBar from './NavBar';
import $ from 'jquery';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class DashboardPage extends React.Component {
    static get propTypes() {
        return {
            params: React.PropTypes.object,
            location: React.PropTypes.object
        };
    }
    constructor(props){
        super(props);
        this.state = {dashboardData : {}, userData : {}}
    }
    componentWillMount() {
        $.ajax({
            url: "/ilimi/partnerDashborad",
            type: "GET",
            success: function (data) {
                this.setState({dashboardData:data});
            }.bind(this),
            error: function (err) {
                console.log(err);
            }.bind(this)
        });

        

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12"><NavBar /></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                <h4>Course Subscription Details</h4>
                {
                    
                            <Card initiallyExpanded={true}>
                                <CardHeader
                                    title= {'Partner Dashboard - ' + this.state.userData.partnerName}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                    />

                                <CardText expandable={true}>

                                    {this.state.dashboardData.courseName} : {this.state.dashboardData.numberOfStudents}
                                </CardText>
                            </Card>
                    
                }
            </div>
                    </div>
                </div>
            </div>
        );
    }
}
