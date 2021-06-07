import React from 'react';
import './styles/Main.min.css';

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