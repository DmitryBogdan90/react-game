import React from 'react';
import { Button } from '@material-ui/core';

export default ({ isMusicOn, playTheme }) => (
  <div>
    <Button onClick={() => playTheme()}>Music: {!isMusicOn ? 'Play' : 'Pause'}</Button>
    Settings
  </div>
);
