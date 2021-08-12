import React, { Component } from 'react';
import './App.css';
import TreeExplorer from './components/TaskPanel/TreeExplorer';
import LeftBarExplorer from './components/LeftBar/LeftBarExplorer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <LeftBarExplorer />
        <div className="Tree-intro">        
          <TreeExplorer />
        </div>
      </div>
    );
  }
}

export default App;