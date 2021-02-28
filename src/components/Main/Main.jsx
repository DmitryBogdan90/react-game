import React, { Component } from 'react';

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
  }

  componentDidUpdate() {
    localStorage.setItem('choices-game', JSON.stringify(this.state));
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

  render() {
    const { browserChoice, playerChoice, winner, score, round } = this.state;

    return (
      <main>
        <Button
          onClick={() => {
            this.newGame();
          }}
        >
          New Game
        </Button>
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
      </main>
    );
  }
}

export default Main;
