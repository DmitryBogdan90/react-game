import React from 'react';
import { Button } from '@material-ui/core';

const Settings = ({ isMusicOn, playTheme }) => (
  <div className="settings-modal">
    <div className="settings-title">Settings</div>
    <Button className="settings-button" onClick={() => playTheme()}>
      Music: {!isMusicOn ? 'Play' : 'Pause'}
    </Button>
  </div>
);

export default Settings;
