import React from 'react';
import { Button } from '@material-ui/core';

const Settings = ({
  isMusicOn,
  playTheme,
  isLizardMode,
  isScoreMode,
  changeLizardMode,
  changeScoreMode,
}) => (
  <div className="settings-modal">
    <div className="settings-title">Settings</div>
    <Button className="settings-button" onClick={() => playTheme()}>
      Music: {!isMusicOn ? 'Play' : 'Pause'}
    </Button>
    <Button disabled className="settings-button" onClick={() => changeLizardMode()}>
      Rules: {isLizardMode ? 'Lizard' : 'Standart'}
    </Button>
    <Button className="settings-button" onClick={() => changeScoreMode()}>
      Mode: {isScoreMode ? 'Confrontation' : 'Accumulation'}
    </Button>
  </div>
);

export default Settings;
