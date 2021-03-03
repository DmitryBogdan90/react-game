import React from 'react';
import { Button } from '@material-ui/core';

import './Header.scss';

const Header = ({ changeBackgroundOn, newGame, saveGame, viewHighScore, viewSettings }) => {
  return (
    <header>
      <Button onClick={() => changeBackgroundOn()}>Background</Button>

      <menu>
        <Button onClick={() => newGame()}>New Game</Button>
        <Button onClick={() => saveGame()}>Save Game</Button>
        <Button onClick={() => viewHighScore()}>High-score</Button>
        <Button onClick={() => viewSettings()}>Settings</Button>
      </menu>
    </header>
  );
};

export default Header;
