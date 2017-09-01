import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* The .panel-default class is used to style 
        the color of the panel. */}
        <div className="panel panel-default post-editor">
          <div className="panel-body">
            <textarea />
            <button className="btn btn-success">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
