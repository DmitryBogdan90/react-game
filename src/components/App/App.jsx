import React, { Component } from 'react';

import './App.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Background from '../Background';
import { Fade, Paper } from '@material-ui/core';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBackgroundOn: false,
    };

    this.changeBackgroundOn = this.changeBackgroundOn.bind(this);
  }

  changeBackgroundOn() {
    console.log('click');
    this.setState({ isBackgroundOn: !this.state.isBackgroundOn });
  }

  render() {
    const { isBackgroundOn } = this.state;
    console.log('render App');

    return (
      <>
        <Fade in={isBackgroundOn}>
          <Paper className={'background'} elevation={4}>
            <Background isBackgroundOn={isBackgroundOn} />
          </Paper>
        </Fade>

        <Header changeBackgroundOn={this.changeBackgroundOn} />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
