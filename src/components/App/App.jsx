import React, { Component } from 'react';
import { Backdrop, Fade, Modal, Paper } from '@material-ui/core';
import Mousetrap from 'mousetrap';

import './App.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Background from '../Background';
import AudioModal from '../../assets/modal.ogg';
import AudioTheme from '../../assets/theme.ogg';
import AudioWin from '../../assets/win.ogg';
import AudioDraw from '../../assets/draw.ogg';
import AudioLose from '../../assets/lose.ogg';
import Highscore from '../Highscore';
import Settings from '../Settings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBackgroundOn: false,
      isMusicOn: false,
      isSettingsOn: false,
      isHighScoreOn: false,
      isLizardMode: false,
      isScoreMode: false,

      choices: ['rock', 'scissors', 'paper'],
      browserChoice: null,
      playerChoice: null,
      winner: null,
      score: null,
      round: null,
    };

    this.changeBackgroundOn = this.changeBackgroundOn.bind(this);
    this.closeHighScore = this.closeHighScore.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
    this.viewHighScore = this.viewHighScore.bind(this);
    this.viewSettings = this.viewSettings.bind(this);

    this.newGame = this.newGame.bind(this);
    this.saveGame = this.saveGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playTheme = this.playTheme.bind(this);
    this.stopTheme = this.stopTheme.bind(this);
    this.changeLizardMode = this.changeLizardMode.bind(this);
    this.changeScoreMode = this.changeScoreMode.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['1', '2', '3'], (event) => this.handleClick(this.state.choices[event.key - 1]));
    Mousetrap.bind(['shift+n'], () => this.newGame());
    Mousetrap.bind(['shift+h'], () => this.viewHighScore());
    Mousetrap.bind(['shift+s'], () => this.viewSettings());

    if (localStorage.getItem('choices-game')) {
      const save = JSON.parse(localStorage.getItem('choices-game'));

      this.setState({ ...save, isMusicOn: false });
    }

    this.stopTheme();
    this.setState({ audioModal: new Audio(AudioModal), audioTheme: new Audio(AudioTheme) });
  }

  componentWillUnmount() {
    Mousetrap.unbind(['1', '2', '3'], (event) =>
      this.handleClick(this.state.choices[event.key - 1]),
    );
    Mousetrap.unbind(['shift+n'], () => this.newGame());
    Mousetrap.unbind(['shift+h'], () => this.viewHighScore());
    Mousetrap.unbind(['shift+s'], () => this.viewSettings());
  }

  componentDidUpdate() {
    localStorage.setItem('choices-game', JSON.stringify(this.state));
  }

  handleClick(choice, choices = this.state.choices) {
    const browserChoice = choices[Math.floor(Math.random() * 3)];
    const playerChoice = choice;
    const winner = getWinner(browserChoice, playerChoice, choices);

    this.playAudioEffect(
      winner === 'player' ? AudioWin : winner === 'none' ? AudioDraw : AudioLose,
    );

    this.setState({
      browserChoice,
      playerChoice,
      winner,
      score:
        winner === 'player'
          ? +this.state.score + 1
          : winner === 'none'
          ? this.state.score
          : +this.state.score - 1,
      round: +this.state.round + 1,
    });

    function getWinner(browserChoice, playerChoice, choices) {
      let winner;
      const [rock, scissors, paper] = choices;
      switch (playerChoice) {
        case rock:
          browserChoice === scissors
            ? (winner = 'player')
            : browserChoice === rock
            ? (winner = null)
            : (winner = 'browser');
          break;
        case scissors:
          browserChoice === paper
            ? (winner = 'player')
            : browserChoice === scissors
            ? (winner = null)
            : (winner = 'browser');
          break;
        case paper:
          browserChoice === rock
            ? (winner = 'player')
            : browserChoice === paper
            ? (winner = null)
            : (winner = 'browser');
          break;
        default:
          console.log('default');
      }
      return winner;
    }
  }

  newGame() {
    this.setState({ browserChoice: null, playerChoice: null, winner: null, score: 0, round: 0 });
    this.playAudioEffect(AudioModal);
  }

  saveGame() {
    this.playAudioEffect(AudioModal);
    localStorage.setItem('choices-game', JSON.stringify(this.state));
  }

  viewHighScore() {
    if (this.state.isSettingsOn) {
      this.setState({ isSettingsOn: !this.state.isSettingsOn });
    }
    this.playAudioEffect(AudioModal);
    this.setState({ isHighScoreOn: true });
  }

  closeHighScore() {
    this.setState({ isHighScoreOn: false });
  }

  viewSettings() {
    if (this.state.isHighScoreOn) {
      this.setState({ isHighScoreOn: !this.state.isHighScoreOn });
    }
    this.playAudioEffect(AudioModal);
    this.setState({ isSettingsOn: true });
  }

  closeSettings() {
    this.setState({ isSettingsOn: false });
  }

  playAudioEffect(audioSource) {
    if (this.audioEffect) {
      this.audioEffect.pause();
    }
    this.audioEffect = new Audio(audioSource);
    this.audioEffect.play();
  }

  playTheme() {
    if (this.state.isMusicOn) {
      this.state.audioTheme.pause();
      this.setState({ isMusicOn: false });
    } else {
      this.setState({ isMusicOn: true });
      this.state.audioTheme.play();
    }
  }

  stopTheme() {
    this.setState({ isThemePlay: false, audioTheme: null });
  }

  changeBackgroundOn() {
    this.setState({ isBackgroundOn: !this.state.isBackgroundOn });
  }

  changeLizardMode() {
    this.setState({ isLizardMode: !this.state.isLizardMode });
  }

  changeScoreMode() {
    this.setState({ isScoreMode: !this.state.isScoreMode });
  }

  render() {
    const {
      isBackgroundOn,
      choices,
      browserChoice,
      playerChoice,
      winner,
      score,
      round,
      isHighScoreOn,
      isSettingsOn,
      isMusicOn,
      isLizardMode,
      isScoreMode,
    } = this.state;

    return (
      <>
        <Fade in={isBackgroundOn}>
          <Paper className="background" elevation={4}>
            <Background isBackgroundOn={isBackgroundOn} />
          </Paper>
        </Fade>

        <Header
          changeBackgroundOn={this.changeBackgroundOn}
          newGame={this.newGame}
          saveGame={this.saveGame}
          viewHighScore={this.viewHighScore}
          viewSettings={this.viewSettings}
        />

        <Main
          browserChoice={browserChoice}
          playerChoice={playerChoice}
          winner={winner}
          score={score}
          round={round}
          choices={choices}
          handleClick={this.handleClick}
        />

        <Fade in={!isBackgroundOn}>
          <Paper className="footer" elevation={4}>
            <Footer />
          </Paper>
        </Fade>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={isHighScoreOn}
          onClose={this.closeHighScore}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isHighScoreOn}>
            <div className="paper">
              <Highscore />
            </div>
          </Fade>
        </Modal>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={isSettingsOn}
          onClose={this.closeSettings}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isSettingsOn}>
            <div className="paper">
              <Settings
                isMusicOn={isMusicOn}
                playTheme={this.playTheme}
                isLizardMode={isLizardMode}
                isScoreMode={isScoreMode}
                changeLizardMode={this.changeLizardMode}
                changeScoreMode={this.changeScoreMode}
              />
            </div>
          </Fade>
        </Modal>
      </>
    );
  }
}

export default App;
