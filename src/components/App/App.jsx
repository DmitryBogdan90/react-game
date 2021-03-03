import React, { Component } from 'react';

import './App.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Background from '../Background';

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
        {isBackgroundOn ? <Background isBackgroundOn={isBackgroundOn} /> : null}
        <Header changeBackgroundOn={this.changeBackgroundOn} />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
