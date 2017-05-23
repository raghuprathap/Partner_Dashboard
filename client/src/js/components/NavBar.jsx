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

  componentWillMount(){
    delete localStorage.user;
  }

  componentDidMount() {
   if(!localStorage.user) {
      $.ajax({
            url: "/getUser",
            type: "GET",
            success: function (data) {
                console.log(data)
                localStorage.setItem('user', JSON.stringify(data));
                this.setUserInState();
            }.bind(this),
            error: function (err) {
                console.log(err);
            }.bind(this)
        });
    } else {
      this.setUserInState();
    }
  }

setUserInState(){
      this.setState({
        user: JSON.parse(localStorage.user)
      });
    }


  handleLogout() {
    delete localStorage.user;
    cookie.remove('token');
    this.context.router.push('/');
  }

  render() {
    if(this.state.user){
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
           {JSON.parse(localStorage.getItem('user')).role === 'admin' ? (
            <div>
            <MenuItem
              leftIcon={<ActionExitToApp />}
              onTouchTap={this.handleLogout.bind(this)}>
              Logout
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
            </div>
              ) : (
              <div>
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
            </div>
              )}
            
        </Drawer>
      </div>
    );
    } else {
        return(<div>"loading..."</div>);
      }
    }
    
  }

