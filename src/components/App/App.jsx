import React from 'react';
import { CssBaseline } from '@material-ui/core';

import './App.scss';
import Header from '../Header';
import Main from '../Main';

const App = () => {
  return (
    <CssBaseline>
      <Header />
      <Main />
    </CssBaseline>
  );
};

export default App;
