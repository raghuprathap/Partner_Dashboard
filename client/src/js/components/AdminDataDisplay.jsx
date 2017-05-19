import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

export default class AdminDataDisplay extends React.Component{
	render(){
		
		return(
			<Card initiallyExpanded={true}>
                                <CardHeader
                                    title= {'Admin Data Dashboard'}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                    />

                                <CardText expandable={true}>

                                    {this.props.allData.courseName}
                                    {this.props.allData.ISBN}
                                    {this.props.allData.partnerName}
                                </CardText>
                            </Card>
        
		)
}
}