import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const LINE_POINTS = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    if (rowsCleared) {
      setScore(prev => prev + LINE_POINTS[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, LINE_POINTS, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, score, rowsCleared]);

  return [score, setScore, rows, setRows, level, setLevel];
};
