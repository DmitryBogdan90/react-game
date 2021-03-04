import React from 'react';
import { Button } from '@material-ui/core';

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
}) => {
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
        </div>
        <div
          className={`round ${
            winner === 'player' ? 'win' : winner === 'browser' ? 'lose' : 'draw'
          }`}
          id={new Date()}
        >
          {!isScoreMode ? (
            <>
              <span>Chances</span>
              <span>{round}</span>
            </>
          ) : (
            <>
              <span>Restored</span>
              <span>{restoredHealth}</span>
            </>
          )}
        </div>
        <div className="winner">
          {isFirstRound || (winner ? (winner === 'player' ? 'WIN!!!!' : 'LOSE') : 'DRAW')}
        </div>
      </div>

      <div className="mode-title">{isScoreMode ? 'Accumulation' : 'Confrontation'}</div>

      <div className="game-view">
        {getImage(playerChoice, 'player', playerAccumulator)}

        <div className="score">
          <div className="score-title">Score</div>
          <div className="score-value">{score}</div>
          {!isScoreMode || (
            <div className="reset-draw-container">
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
