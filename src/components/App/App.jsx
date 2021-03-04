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
      isFirstRound: true,
      isBackgroundOn: false,
      isMusicOn: false,
      isSettingsOn: false,
      isHighScoreOn: false,
      isLizardMode: false,
      isScoreMode: false,
      isDead: false,

      choices: ['rock', 'scissors', 'paper'],
      browserChoice: null,
      playerChoice: null,
      winner: null,

      score: 5,
      round: 0,
      playerAccumulator: 0,
      browserAccumulator: 10,
      iterationAccumulator: 0,
      drawAccumulator: 0,
      restoredHealth: 0,
      absorbedDamage: 0,
      deathCount: 0,
      killsCount: 0,
      newGameCount: 0,
      hardResetCount: 0,

      highScore: [],
    };

    this.changeBackgroundOn = this.changeBackgroundOn.bind(this);
    this.closeHighScore = this.closeHighScore.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
    this.viewHighScore = this.viewHighScore.bind(this);
    this.viewSettings = this.viewSettings.bind(this);
    this.playAudioEffect = this.playAudioEffect.bind(this);
    this.newGame = this.newGame.bind(this);
    this.saveGame = this.saveGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playTheme = this.playTheme.bind(this);
    this.stopTheme = this.stopTheme.bind(this);
    this.changeLizardMode = this.changeLizardMode.bind(this);
    this.changeScoreMode = this.changeScoreMode.bind(this);
    this.resetDrawAccumulator = this.resetDrawAccumulator.bind(this);
    this.resetPlayerAccumulator = this.resetPlayerAccumulator.bind(this);
    this.absorbBrowserScore = this.absorbBrowserScore.bind(this);
    this.hardReset = this.hardReset.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind(['1', '2', '3'], (event) => this.handleClick(this.state.choices[event.key - 1]));
    Mousetrap.bind(['shift+n'], () => this.newGame());
    Mousetrap.bind(['shift+h'], () => this.viewHighScore());
    Mousetrap.bind(['shift+s'], () => this.viewSettings());
    Mousetrap.bind(['shift+m'], () => this.changeScoreMode());

    if (localStorage.getItem('choices-game')) {
      const save = JSON.parse(localStorage.getItem('choices-game'));
      const { newGameCount, hardResetCount, deathCount } = save;
      const hardResetFine = hardResetCount * 20;
      const deathFine = +deathCount * 10;
      const startsFine = +newGameCount + 1;
      const browserHealth = 10 + startsFine + deathFine + hardResetFine;
      this.setState({ ...save, browserHealth: browserHealth, isMusicOn: false });
    }

    if (this.state.score <= 0 && this.state.isFirstRound) {
      console.log('human must die');
      this.killHuman('human die');
    } else if (this.state.browserAccumulator <= 0 && this.state.isFirstRound) {
      console.log('browser cant die');
      this.killHuman('human die');
    }

    this.stopTheme();

    this.setState({
      audioModal: new Audio(AudioModal),
      audioTheme: new Audio(AudioTheme),
      browserHealth:
        10 +
        +this.state.newGameCount +
        +this.state.deathCount * 10 +
        +this.state.hardResetCount * 20,
    });
  }

  componentWillUnmount() {
    Mousetrap.unbind(['1', '2', '3'], (event) =>
      this.handleClick(this.state.choices[event.key - 1]),
    );
    Mousetrap.unbind(['shift+n'], () => this.newGame());
    Mousetrap.unbind(['shift+h'], () => this.viewHighScore());
    Mousetrap.unbind(['shift+s'], () => this.viewSettings());
    Mousetrap.unbind(['shift+m'], () => this.changeScoreMode());
  }

  componentDidUpdate() {
    localStorage.setItem('choices-game', JSON.stringify(this.state));

    if (this.state.score <= 0 && this.state.isFirstRound) {
      this.killHuman();
    }

    console.log('state', this.state.browserAccumulator);
  }

  handleClick(choice) {
    const {
      score,
      round,
      choices,
      isScoreMode,
      playerAccumulator,
      browserAccumulator,
      iterationAccumulator,
      drawAccumulator,
    } = this.state;
    const browserChoice = choices[Math.floor(Math.random() * 3)];
    const playerChoice = choice;
    const winner = getWinner(browserChoice, playerChoice, choices);

    this.playAudioEffect(winner === 'player' ? AudioWin : winner === null ? AudioDraw : AudioLose);

    if (!isScoreMode) {
      this.setState({
        isFirstRound: false,
        browserChoice,
        playerChoice,
        winner,
        score: winner === 'player' ? +score + 1 : winner === null ? score : +score - 1,
        round: +round + 1,
        drawAccumulator: winner === null ? drawAccumulator + 1 : drawAccumulator,
      });
    } else {
      this.setState({
        isFirstRound: false,
        browserChoice,
        playerChoice,
        winner,
        browserAccumulator: winner === 'browser' ? +browserAccumulator + 1 : browserAccumulator,
        playerAccumulator: winner === 'player' ? +playerAccumulator + 1 : playerAccumulator,
        drawAccumulator: winner === null ? +drawAccumulator + 1 : drawAccumulator,
        iterationAccumulator: +iterationAccumulator + 1,
        round: +round + 1,
      });
    }

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
    const { newGameCount, hardResetCount, deathCount } = this.state;
    const hardResetFine = (hardResetCount + 1) * 20;
    const deathFine = +deathCount * 10;
    const startsFine = +newGameCount + 1;
    const browserHealth = 10 + startsFine + deathFine + hardResetFine;

    this.setState({
      newGameCount: +newGameCount + 1,
      isFirstRound: true,
      isBackgroundOn: false,
      isMusicOn: false,
      isSettingsOn: false,
      isHighScoreOn: false,
      isLizardMode: false,
      isDead: false,

      choices: ['rock', 'scissors', 'paper'],
      browserChoice: null,
      playerChoice: null,
      winner: null,
      score: 5,
      round: 0,
      playerAccumulator: 0,
      browserAccumulator: browserHealth,
      iterationAccumulator: 0,
      drawAccumulator: 0,
      restoredHealth: 0,
      absorbedDamage: 0,
    });
    this.playAudioEffect(AudioModal);
  }

  saveGame() {
    const { score, restoredHealth, round, absorbedDamage, highScore } = this.state;
    const sortHighScore = highScore.splice(-20);

    this.setState({
      highScore: [
        ...sortHighScore,
        { id: Date.now(), score, restoredHealth, round, absorbedDamage },
      ].sort((a, b) => (a.score < b.score ? 1 : -1)),
    });
    this.playAudioEffect(AudioModal);
    localStorage.setItem('choices-game', JSON.stringify(this.state));
  }

  viewHighScore() {
    if (this.state.isHighScoreOn) {
      this.setState({ isHighScoreOn: !this.state.isHighScoreOn });
      return;
    }
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
      this.audioEffect = null;
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

  resetDrawAccumulator() {
    const { score, drawAccumulator, restoredHealth } = this.state;
    this.setState({
      score: +score + +drawAccumulator,
      restoredHealth: +restoredHealth + +drawAccumulator,
      drawAccumulator: 0,
    });
    this.playAudioEffect(AudioModal);
  }

  resetPlayerAccumulator() {
    const { score, playerAccumulator, restoredHealth } = this.state;
    this.setState({
      score: +score + +playerAccumulator,
      restoredHealth: +restoredHealth + +playerAccumulator,
      playerAccumulator: 0,
    });
    this.playAudioEffect(AudioModal);
  }

  absorbBrowserScore() {
    const { score, browserAccumulator, absorbedDamage } = this.state;

    if (+score - +browserAccumulator > 0) {
      this.setState({
        score: +score - +browserAccumulator,
        browserAccumulator: 0,
        absorbedDamage: +absorbedDamage + +browserAccumulator,
      });
      this.playAudioEffect(AudioModal);
    } else {
      this.killHuman();
    }
  }

  killHuman() {
    const { deathCount } = this.state;
    this.setState({
      isDead: true,
      deathCount: +deathCount + 1,
    });
  }

  hardReset() {
    const { hardResetCount, newGameCount } = this.state;

    this.setState({
      hardResetCount: +hardResetCount + 1,
      isScoreMode: false,
      newGameCount: newGameCount > 0 ? newGameCount - 1 : newGameCount,
    });
    this.newGame();
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
      playerAccumulator,
      browserAccumulator,
      iterationAccumulator,
      drawAccumulator,
      restoredHealth,
      absorbedDamage,
      isDead,
      deathCount,
      newGameCount,
      hardResetCount,
      highScore,
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
          deathCount={deathCount}
          newGameCount={newGameCount}
          hardResetCount={hardResetCount}
        />

        <Main
          browserChoice={browserChoice}
          playerChoice={playerChoice}
          winner={winner}
          score={score}
          round={round}
          choices={choices}
          handleClick={this.handleClick}
          isScoreMode={isScoreMode}
          playerAccumulator={playerAccumulator}
          browserAccumulator={browserAccumulator}
          iterationAccumulator={iterationAccumulator}
          drawAccumulator={drawAccumulator}
          resetDrawAccumulator={this.resetDrawAccumulator}
          resetPlayerAccumulator={this.resetPlayerAccumulator}
          restoredHealth={restoredHealth}
          absorbedDamage={absorbedDamage}
          absorbBrowserScore={this.absorbBrowserScore}
        />

        <Fade in={!isBackgroundOn}>
          <Paper className="footer" elevation={4}>
            <Footer />
          </Paper>
        </Fade>

        <div className="score-mode">
          <div className="big-score-mode-title">
            {isScoreMode ? 'Accumulation' : 'Confrontation'}
          </div>
        </div>

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
            <div className="paper high-score-table">
              <Highscore highScore={highScore} />
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
                hardReset={this.hardReset}
              />
            </div>
          </Fade>
        </Modal>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={isDead}
          onClose={this.newGame}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isDead}>
            <div className="end-game">YOU DIE</div>
          </Fade>
        </Modal>
      </>
    );
  }
}

export default App;
