export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );

export const checkCollition = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      if (player.tetromino[y][x] !== 0) {
        if (
          // Check that the tetromino is in bounds vertically (y)
          !stage[y + player.pos.y + moveY] ||
          // Check that the tetromino is in bounds horizontally (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // Check that the tetromino is not colliding with other blocks
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
};
