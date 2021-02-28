import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

import './Main.scss';
import { Button } from '@material-ui/core';

const defaultChoices = ['Rock', 'Scissors', 'Paper'];
const extendedChoices = ['Rock', 'Scissors', 'Paper', 'Lizard', 'Spock'];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserChoice: '',
      playerChoice: '',
      winner: '',
      score: 0,
      round: 0,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('choices-game')) {
      const save = JSON.parse(localStorage.getItem('choices-game'));

      this.setState({ ...save });
    }

    Mousetrap.bind(['1', '2', '3'], (event) => this.handleClick(defaultChoices[event.key - 1]));
    Mousetrap.bind(['shift+n'], () => this.newGame());
    Mousetrap.bind(['shift+h'], () => this.viewHighScore());
    Mousetrap.bind(['shift+s'], () => this.viewSettings());
  }

  componentWillUnmount() {
    Mousetrap.unbind(['1', '2', '3'], (event) => this.handleClick(defaultChoices[event.key - 1]));
    Mousetrap.unbind(['shift+n'], () => this.newGame());
    Mousetrap.unbind(['shift+h'], () => this.viewHighScore());
    Mousetrap.unbind(['shift+s'], () => this.viewSettings());
  }

  componentDidUpdate() {
    this.saveGame();
  }

  getWinner(browserChoice, playerChoice) {
    let winner;
    const [rock, scissors, paper] = defaultChoices;
    switch (playerChoice) {
      case rock:
        browserChoice === scissors
          ? (winner = 'player')
          : browserChoice === rock
          ? (winner = 'none')
          : (winner = 'browser');
        break;
      case scissors:
        browserChoice === paper
          ? (winner = 'player')
          : browserChoice === scissors
          ? (winner = 'none')
          : (winner = 'browser');
        break;
      case paper:
        browserChoice === rock
          ? (winner = 'player')
          : browserChoice === paper
          ? (winner = 'none')
          : (winner = 'browser');
        break;
      default:
        console.log('default switch');
    }
    console.log('inside getWinner', this.state);
    return winner;
  }

  getBrowserChoice() {
    return defaultChoices[Math.floor(Math.random() * 3)];
  }

  handleClick(choice) {
    console.log('CLICK CHOICE');
    const browserChoice = this.getBrowserChoice();
    const playerChoice = choice;
    const winner = this.getWinner(browserChoice, playerChoice);

    this.setState({
      browserChoice,
      playerChoice,
      winner,
      score:
        winner === 'player'
          ? this.state.score + 1
          : winner === 'none'
          ? this.state.score
          : this.state.score - 1,
      round: this.state.round + 1,
    });
  }

  newGame() {
    console.log('click new game');
    this.setState({ browserChoice: '', playerChoice: '', winner: '', score: 0, round: 0 });
  }

  saveGame() {
    console.log('click save game');
    localStorage.setItem('choices-game', JSON.stringify(this.state));
  }

  viewHighScore() {
    console.log('click viewHighScore');
  }

  viewSettings() {
    console.log('click viewSettings');
  }

  render() {
    const { browserChoice, playerChoice, winner, score, round } = this.state;

    return (
      <main>
        <Button onClick={() => this.newGame()}>New Game</Button>
        <Button onClick={() => this.saveGame()}>Save Game</Button>
        <Button onClick={() => this.viewHighScore()}>High-score</Button>
        <Button onClick={() => this.viewSettings()}>Settings</Button>
        <div>Round: {round}</div>
        <div>Score: {score}</div>
        <div>WINNER: {winner}</div>
        <div>Browser choice: {browserChoice}</div>
        <div>Player choice: {playerChoice}</div>
        {defaultChoices.map((choice, index) => {
          return (
            <Button key={index} onClick={() => this.handleClick(choice)}>
              {choice}
            </Button>
          );
        })}
        <div className={'help'}>
          hotkeys:{' '}
          <ul>
            {defaultChoices.map((choice, index) => {
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
  }
}

export default Main;
