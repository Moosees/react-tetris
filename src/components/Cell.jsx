import React from 'react';
import { TETROMINOS } from '../tetrominos';
import { StyledCell } from './cell.styles';

const Cell = ({ type }) => (
  <StyledCell color={TETROMINOS[type].color} />
);

export default Cell;
