import React from 'react';
import cookie from 'react-cookie';
import request from 'superagent';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import Avatar from 'material-ui/Avatar';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const styles = {
  avatarContainer: {
    textAlign: 'center'
  },
  avatar: {
    margin: '13px'
  }
};

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false
    };
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    };
  }

  /*componentDidMount() {
    const setUserInState = () => {
      this.setState({
        user: JSON.parse(localStorage.user)
      });
    };

    if(!localStorage.user) {
      request
        .get('/getUser')
        .end(function(err, response) {
          if(err) { throw err; }
          localStorage.user = JSON.stringify(response.body);
          setUserInState();
        });
    } else {
      setUserInState();
    }
  }*/

  handleLogout() {
    delete localStorage.user;
    cookie.remove('token');
    this.context.router.push('/');
  }

  render() {
    return (
      <div>
        <AppBar
          title="Partner Dashboard"
          onLeftIconButtonTouchTap={() => { this.setState({drawerOpen: true}); }}
        />
        {this.state.drawerOpen}
        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          onRequestChange={() => { this.setState({drawerOpen: false}); }} >
            <div style={styles.avatarContainer}>
            { this.state.user ?
              <Avatar src={this.state.user.avatar_url} size={230} style={styles.avatar}/> :
              null }
            </div>
            <Divider />
            <MenuItem
              leftIcon={<ActionExitToApp />}
              onTouchTap={this.handleLogout.bind(this)}>
              Logout
            </MenuItem>
            <MenuItem
              leftIcon={<ActionDashboard />}
              onTouchTap={() => { this.context.router.push('/dashboard'); }}>
              Dashboard
            </MenuItem>
            <MenuItem
              leftIcon={<ActionDashboard />}
              onTouchTap={() => { this.context.router.push('/admin'); }}>
              Admin View
            </MenuItem>
            <MenuItem
              leftIcon={<ActionDashboard />}
              onTouchTap={() => { this.context.router.push('/CourseAdminView'); }}>
              Partner Details
            </MenuItem>
        </Drawer>
      </div>
    );
  }
}