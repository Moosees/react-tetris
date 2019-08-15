import React from 'react';
import { StyledStartButton } from './startButton.styles';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start game!</StyledStartButton>
);

export default StartButton;
