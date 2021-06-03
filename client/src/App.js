import React from 'react';
import './Styles/Main.css';

import NavBanner from './Components/NavBanner/NavBanner';
import Content from './Components/Content/Content';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <>
      <NavBanner />
      <Content />
      <Nav />
    </>
  );
}

export default App;