import React from 'react';
import { Button } from '@material-ui/core';

import './Main.scss';

export default ({ browserChoice, playerChoice, winner, score, round, choices, handleClick }) => {
  return (
    <main>
      <div>Round: {round}</div>
      <div>Score: {score}</div>
      {!winner || <div>WINNER: {winner}</div>}
      {!browserChoice || <div>Browser: {browserChoice}</div>}
      {!playerChoice || <div>Player: {playerChoice}</div>}
      {choices.map((choice, index) => {
        return (
          <Button key={index} onClick={() => handleClick(choice)}>
            {choice}
          </Button>
        );
      })}

      <div className={'help'}>
        hotkeys:{' '}
        <ul>
          {choices.map((choice, index) => {
            return (
              <li key={index}>
                Press {index + 1} to choose {choice}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
