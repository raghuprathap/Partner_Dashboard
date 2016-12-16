import React from 'react';
import ReactDOM from 'react-dom';
import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/style.css';
export default class MainComponent extends React.Component{

  render() {
    return(
      <div className="MainComponent">
       
      </div>
  );
  }
}
ReactDOM.render(
  <h1>Hello, Raghu</h1>,
  document.getElementById('content')
);