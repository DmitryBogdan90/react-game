import React, { useEffect, useState } from 'react';

import './Main.scss';
import { Button } from '@material-ui/core';

const Main = () => {
  const defaultChoices = ['Rock', 'Scissors', 'Paper'];
  const extendedChoices = ['Rock', 'Scissors', 'Paper', 'Lizard', 'Spock'];

  const [playerChoice, setPlayerChoice] = useState('default');
  const [browserChoice, setBrowserChoice] = useState('browserChoice');

  useEffect(() => {
    setBrowserChoice(defaultChoices[Math.floor(Math.random() * 3)]);
  }, [playerChoice]);

  const handleClick = (choice) => {
    console.log('choice');
    setPlayerChoice('');
    setPlayerChoice(choice);
  };

  return (
    <main>
      <div>Browser choice: {browserChoice}</div>
      <div>Player choice: {playerChoice}</div>
      {defaultChoices.map((choice, index) => {
        return (
          <Button key={index} onClick={() => handleClick(choice)}>
            {choice}
          </Button>
        );
      })}
    </main>
  );
};

export default Main;
