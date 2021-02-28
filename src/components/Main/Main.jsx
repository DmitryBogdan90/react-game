import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

import './Main.scss';
import { Button } from '@material-ui/core';
import AudioDraw from '../../assets/draw.ogg';
import AudioWin from '../../assets/win.ogg';
import AudioLose from '../../assets/lose.ogg';
import AudioModal from '../../assets/modal.ogg';
import AudioTheme from '../../assets/theme.ogg';

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
      isThemePlay: true,
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

    this.setState({ audioModal: new Audio(AudioModal) });
    this.stopTheme();
    this.setState({ audioTheme: new Audio(AudioTheme) });
  }

  componentWillUnmount() {
    Mousetrap.unbind(['1', '2', '3'], (event) => this.handleClick(defaultChoices[event.key - 1]));
    Mousetrap.unbind(['shift+n'], () => this.newGame());
    Mousetrap.unbind(['shift+h'], () => this.viewHighScore());
    Mousetrap.unbind(['shift+s'], () => this.viewSettings());

    this.stopTheme();
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
    }
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

    this.playAudioEffect(
      winner === 'player' ? AudioWin : winner === 'none' ? AudioDraw : AudioLose,
    );

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
    this.playAudioEffect(AudioModal);
  }

  saveGame() {
    console.log('click save game');
    this.playAudioEffect(AudioModal);
    localStorage.setItem('choices-game', JSON.stringify(this.state));
  }

  viewHighScore() {
    console.log('click viewHighScore');
    this.playAudioEffect(AudioModal);
  }

  viewSettings() {
    console.log('click viewSettings');
    this.playAudioEffect(AudioModal);
  }

  playAudioEffect(audioSource) {
    if (this.audioEffect) {
      this.audioEffect.pause();
    }
    this.audioEffect = new Audio(audioSource);
    this.audioEffect.play();
  }

  playTheme() {
    if (this.state.isThemePlay) {
      this.state.audioTheme.pause();
      this.setState({ isThemePlay: false });
    } else {
      this.setState({ isThemePlay: true });
      this.state.audioTheme.play();
    }
  }

  stopTheme() {
    this.setState({ isThemePlay: false, audioTheme: null });
  }

  render() {
    console.log('render', this.state);
    const {
      browserChoice,
      playerChoice,
      winner,
      score,
      round,
      isThemePlay,
      isHighScoreView,
    } = this.state;

    return (
      <main>
        <Button onClick={() => this.playTheme()}>Music: {isThemePlay ? 'Play' : 'Pause'}</Button>
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
