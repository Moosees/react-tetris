import { useState, useCallback } from 'react';
import { randomTetromino, TETROMINOS } from '../tetrominos';
import { STAGE_WIDTH, checkCollition } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  });

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false
    });
  }, []);

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided
    }));
  };

  const rotate = (matrix, dir) => {
    // transpose rows to cols
    const rotatedTetromino = matrix.map((_, i) => matrix.map(col => col[i]));
    console.log('Normal', matrix);
    console.log('Transposed', rotatedTetromino);
    // reverse if we rotated anti-clockwise
    if (dir > 0) {
      return rotatedTetromino.map(row => row.reverse());
    } else {
      return rotatedTetromino.reverse();
    }
  };

  const rotatePlayer = (stage, dir) => {
    const playerClone = JSON.parse(JSON.stringify(player));
    playerClone.tetromino = rotate(playerClone.tetromino, dir);
    // collition detection
    const posBackup = playerClone.pos.x;
    let offset = 1;
    while (checkCollition(playerClone, stage, { x: 0, y: 0 })) {
      // try to move the piece left or right if collided
      playerClone.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      //console.log('offset:', offset);
      // if move is larger than the tetromino: abort!
      if (offset > playerClone.tetromino[0].length) {
        rotate(playerClone.tetromino, -dir);
        playerClone.pos.x = posBackup;
        return;
      }
    }

    setPlayer(playerClone);
  };

  return [player, resetPlayer, updatePlayerPos, rotatePlayer];
};
