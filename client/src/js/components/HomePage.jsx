import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

export default class HomePage extends Component {
    render() {
        return (
            <div style={{ "marginLeft": "45%", "marginTop": "8%" }}>
                <Link to="/login">
                    <RaisedButton label="Login" primary={true} />
                </Link>
                <Link to="/register">
                    <RaisedButton style={{ "marginLeft": "20px" }} label="Register" primary={true} />
                </Link>
            </div>
        )
    }
}
