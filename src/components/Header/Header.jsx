import React from 'react';
import { Button } from '@material-ui/core';

import './Header.scss';

const Header = ({ changeBackgroundOn }) => {
  return (
    <header>
      <h2>Header</h2>
      <Button onClick={() => changeBackgroundOn()}>Background</Button>
    </header>
  );
};

export default Header;
