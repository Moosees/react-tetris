import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = stageToSweep =>
      stageToSweep.reduce((accumulator, row) => {
        // returns -1 if not found, else found index
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          // add empty row instead of the full row
          accumulator.unshift(
            new Array(stageToSweep[0].length).fill([0, 'clear'])
          );
          return accumulator;
        } else {
          // if row is not full just add it to newStage
          accumulator.push(row);
          return accumulator;
        }
      }, []);

    const updateStage = prevStage => {
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ];
          }
        });
      });
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      } else {
        return newStage;
      }
    };
    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
