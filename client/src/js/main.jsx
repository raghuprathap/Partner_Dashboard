import React from 'react';
import ReactDOM from 'react-dom';
import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/style.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import HomePage from './components/HomePage.jsx';
import LoginPage from './components/LoginPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import DashboardPage from './components/DashboardPage.jsx';
import CourseAdmin from './components/CourseAdmin.jsx';
import CourseAdminView from './components/CourseAdminView.jsx';
export default class MainComponent extends React.Component {

  render() {
    return (
      <div className="MainComponent">

      </div>
    );
  }
}
ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={HomePage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/admin" component={CourseAdmin} />
      <Route path="/CourseAdminView" component={CourseAdminView} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('content')
);