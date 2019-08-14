import React from 'react';
import Cell from './Cell';
import { StyledStage } from './stage.styles';

const Stage = ({ stage }) => (
  <StyledStage heigth={stage.length} width={stage[0].length}>
    {stage.map(row => row.map((cell, i) => <Cell key={i} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
