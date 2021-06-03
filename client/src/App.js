import React, { Component } from 'react';
import './Styles/Main.css';

import Content from './Components/Content/Content';
import Nav from './Components/Nav/Nav';

class App extends Component {
  state = {
    navSide: "right"
  }

  render() {
    return (
      <div>
        <Content />
        <Nav {...this.state} />
      </div>
    );
  }
}

export default App;