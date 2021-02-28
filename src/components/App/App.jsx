import React from 'react';
import { CssBaseline } from '@material-ui/core';

import './App.scss';
import Header from '../Header';

const App = () => {
  return (
    <CssBaseline>
      <Header />
      <div>React-game</div>
    </CssBaseline>
  );
};

export default App;
