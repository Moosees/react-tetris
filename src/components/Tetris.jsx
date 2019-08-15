import React, { useState } from 'react';
import { createStage, checkCollition } from '../gameHelpers';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';
import { StyledTetris, StyledTetrisWrapper } from './tetris.styles';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, resetPlayer, updatePlayerPos] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const startGame = () => {
    setStage(createStage());
    setGameOver(false);
    resetPlayer();
  };

  const movePlayer = dir => {
    if (!checkCollition(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const drop = () => {
    if (!checkCollition(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over check
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  console.log('Stage:', stage);
  console.log('Player:', player);
  return (
    <StyledTetrisWrapper role="button" tabIndex={0} onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton callback={startGame} />
          {gameOver ? <Display gameOver text="Game Over!" /> : null}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
