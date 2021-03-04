import React from 'react';

import './Highscore.scss';

const Highscore = ({ highScore }) => {
  return (
    <div>
      <div className="highscore-row">
        <div className="highscore-place highscore-item">place</div>
        <div className="highscore-score highscore-item">score</div>
        <div className="highscore-restore highscore-item">restored</div>
        <div className="highscore-absorb highscore-item">absorbed</div>
        <div className="highscore-chances highscore-item">chances</div>
      </div>
      {highScore.map(({ score, restoredHealth, round, absorbedDamage }, index) => {
        return (
          <div key={index} className="highscore-row">
            <div className="highscore-place highscore-item">{index + 1}</div>
            <div className="highscore-score highscore-item">{score}</div>
            <div className="highscore-restore highscore-item">{restoredHealth}</div>
            <div className="highscore-absorb highscore-item">{absorbedDamage}</div>
            <div className="highscore-chances highscore-item">{round}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Highscore;
