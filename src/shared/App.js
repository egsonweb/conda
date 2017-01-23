import React from 'react';
import { Match, Miss } from 'react-router';

import Menu from '../components/Menu';
import Home from '../components/Home';
import About from '../components/About';

function App() {
  return (
    <div className="app-container">
      <Menu />
      <Match exactly pattern="/" component={Home}/>
      <Match exactly pattern="/about" component={About}/>
    </div>
  );
}

export default App;
