import React from 'react';
import './styles/main.min.css';

import NavBanner from './components/NavBanner/NavBanner';
import Content from './components/Content/Content';
import Nav from './components/Nav/Nav';

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