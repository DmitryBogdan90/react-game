import React from 'react';
import { Button } from '@material-ui/core';

import './Main.scss';
import paperSvg from '../../assets/paper.svg';
import scissorsSvg from '../../assets/scissors.svg';
import rockSvg from '../../assets/rock.svg';

const Main = ({ browserChoice, playerChoice, winner, score, round, choices, handleClick }) => {
  const getImage = (choice, title) => {
    return (
      <div className="choice-card">
        <div className="title-choice">{title}</div>
        <div className="image-choice-container">
          <img
            className="image-choice"
            src={choice === 'paper' ? paperSvg : playerChoice === 'rock' ? rockSvg : scissorsSvg}
            alt=""
          />
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
        </div>
        <div
          className={`round ${
            winner === 'player' ? 'win' : winner === 'browser' ? 'lose' : 'draft'
          }`}
        >
          Round: {round}
        </div>
        <div className="score">Score: {score}</div>
      </div>

      <div className="game-view">
        {getImage(playerChoice, 'player')}
        <div className="winner">{winner ? `${winner} WIN!!!` : 'draft'} </div>
        {getImage(browserChoice, 'browser')}
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
