import React from 'react';
import { Button } from '@material-ui/core';

import './Header.scss';

const Header = ({ changeBackgroundOn, newGame, saveGame, viewHighScore, viewSettings }) => {
  return (
    <header>
      <Button className="header-button" onClick={() => changeBackgroundOn()}>
        Background
      </Button>

      <menu>
        <Button className="header-button" onClick={() => newGame()}>
          New Game
        </Button>
        <Button className="header-button" onClick={() => saveGame()}>
          Save Game
        </Button>
        <Button className="header-button" onClick={() => viewHighScore()}>
          High-score
        </Button>
        <Button className="header-button" onClick={() => viewSettings()}>
          Settings
        </Button>
      </menu>
    </header>
  );
};

export default Header;
