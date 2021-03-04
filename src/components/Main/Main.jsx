import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Main.scss';
import paperSvg from '../../assets/paper.svg';
import scissorsSvg from '../../assets/scissors.svg';
import rockSvg from '../../assets/rock.svg';

const Main = ({
  browserChoice,
  playerChoice,
  winner,
  score,
  round,
  choices,
  handleClick,
  isScoreMode,
  playerAccumulator,
  browserAccumulator,
  drawAccumulator,
  resetDrawAccumulator,
  resetPlayerAccumulator,
  isFirstRound,
  restoredHealth,
  absorbedDamage,
  absorbBrowserScore,
  changeBackgroundOn,
  newGame,
  saveGame,
  viewHighScore,
  viewSettings,
}) => {
  const [isBurger, setBurger] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const burgerClick = (event) => {
    setBurger(!isBurger);
    setAnchorEl(event.currentTarget);
  };

  const burgerClose = () => {
    setAnchorEl(null);
  };

  const getImage = (choice, title, points = 1000) => {
    return (
      <div className="choice-card">
        <div className="title-choice">{title}</div>
        <div className="image-choice-container">
          {choice && (
            <img
              className="image-choice"
              src={choice === 'paper' ? paperSvg : playerChoice === 'rock' ? rockSvg : scissorsSvg}
              alt=""
            />
          )}
          {!isScoreMode || (
            <div className={title === 'player' ? 'player-points' : 'browser-points'}>{points}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <main>
      <div className="game-info">
        <div className="help">
          {choices.map((choice, index) => {
            return (
              <div key={index}>
                Press {index + 1} to choose {choice}
              </div>
            );
          })}
          <div>Press shift+m to change mode</div>
          <div>Press shift+h to open/close highscore</div>
        </div>
        <div
          className={`round ${
            winner === 'player' ? 'win' : winner === 'browser' ? 'lose' : 'draw'
          }`}
        >
          <div className="round-item">
            <div>Restored</div>
            <div>{restoredHealth}</div>
          </div>
          <div className="round-item">
            <div>Chances</div>
            <div>{round}</div>
          </div>
          <div className="round-item">
            <div>Absorbed</div>
            <div>{absorbedDamage}</div>
          </div>
          <div className="round-item burger">
            <Button
              className="burger-button"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={burgerClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={burgerClose}
              color="primary"
            >
              <MenuItem onClick={() => changeBackgroundOn()}>Background</MenuItem>
              <MenuItem
                onClick={() => {
                  burgerClose();
                  newGame();
                }}
              >
                New Game
              </MenuItem>
              <MenuItem
                onClick={() => {
                  burgerClose();
                  saveGame();
                }}
              >
                Save Game
              </MenuItem>
              <MenuItem
                onClick={() => {
                  burgerClose();
                  viewHighScore();
                }}
              >
                High-score
              </MenuItem>
              <MenuItem
                onClick={() => {
                  burgerClose();
                  viewSettings();
                }}
              >
                Settings
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="winner">
          {!isFirstRound && (winner ? (winner === 'player' ? 'WIN!!!!' : 'LOSE') : 'DRAW')}
        </div>
      </div>

      <div className="mode-title">{isScoreMode ? 'Accumulation' : 'Confrontation'}</div>

      <div className="game-view">
        {getImage(playerChoice, 'Human', playerAccumulator)}

        <div className="score">
          <div className="score-title">Health</div>
          <div className="score-value">{score}</div>
          {!isScoreMode || (
            <div className="reset-draw-container">
              <Button className="reset-draw-button" onClick={() => absorbBrowserScore()}>
                absorb
              </Button>
              <Button className="reset-draw-button" onClick={() => resetPlayerAccumulator()}>
                Reset acc {playerAccumulator}
              </Button>
              <Button className="reset-draw-button" onClick={() => resetDrawAccumulator()}>
                BONUS {drawAccumulator}
              </Button>
            </div>
          )}
        </div>
        {getImage(browserChoice, 'browser', browserAccumulator)}
      </div>

      <div className="choices">
        {choices.map((choice, index) => {
          return (
            <Button
              className="choice-button"
              size={'large'}
              key={index}
              onClick={() => handleClick(choice)}
            >
              {choice}
            </Button>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
