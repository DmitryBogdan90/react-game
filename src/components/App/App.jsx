import React from 'react';
import { CssBaseline } from '@material-ui/core';

import './App.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const App = () => {
  return (
    <CssBaseline>
      <Header />
      <Main />
      <Footer />
    </CssBaseline>
  );
};

export default App;
