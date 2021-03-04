import React from 'react';
import { Button } from '@material-ui/core';

import './Header.scss';

const Header = ({
  changeBackgroundOn,
  newGame,
  saveGame,
  viewHighScore,
  viewSettings,
  deathCount,
  newGameCount,
  hardResetCount,
}) => {
  return (
    <header>
      <menu className="buttons-header">
        <Button className="header-button" onClick={() => changeBackgroundOn()}>
          Background
        </Button>
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

      <div className="globals">
        <div className="deaths globals-item">
          <div>deaths(+10)</div>
          <div>{deathCount}</div>
        </div>
        <div className="starts globals-item">
          <div>starts(+1)</div>
          <div>{newGameCount}</div>
        </div>
        <div className="resets globals-item">
          <div>resets(**2)</div>
          <div>{hardResetCount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
