
import { useCallback, useRef, useState } from 'react';
import { numCols, numRows, positions } from '../assets/constants';
import { generateGrid } from '../assets/utils';
import {IUseMainControllerOutput} from './main.interfaces';
import useInterval from './useInterval';

export const useMainController = (): IUseMainControllerOutput => {
  const [speed, setSpeed] = useState(300);
  const [generationCount, setGenerationCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState(() => {
    return generateGrid()
  });
  //Como estamos ejecutando la función una única vez y necesitamos tener 
  //actualizado en todo momento nuestro isRunning que en este caso es nuestra Kill condition
  //lo referenciamos ya que la función no tiene forma de saber cuándo este isRunning pasa de true a false o visceversa
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;
  //Permitir al usuario pintar o despintar celdas
  const onClickCell = (mappedGrid: number[][], i: number , k: number) => {
    let userGrid: number[][] = JSON.parse(JSON.stringify(grid));
    userGrid[i][k] = mappedGrid[i][k] ? 0 : 1;
    setGrid(userGrid);
  }

  const handleStartGame = useCallback((grid) => {
    //
    if(!isRunningRef.current){
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < numRows ; i ++){
      for ( let j = 0; j < numCols ; j ++){
        let surrounderCells = 0;
        // eslint-disable-next-line no-loop-func
        //Recorremos el array de posiciones y nos aseguramos de no irnos por fuera del cuadrante
        positions.forEach(([x, y]) => {
          const newI = i + x;
          const newJ = j + y;
          //
          if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
            surrounderCells += grid[newI][newJ];
            console.log(surrounderCells)
          };
        });
        //Game rules
        if ( surrounderCells < 2 || surrounderCells > 3){
          newGrid[i][j] = 0
        } else if (grid[i][j] === 0 && surrounderCells === 3) {
          newGrid[i][j] = 1;
        }
      }
    }
    setGrid(newGrid)
  }, [])

  useInterval(() => {
    handleStartGame(grid)
  }, speed)

  const onClickStarted = () => {
    setIsRunning(!isRunning)
    if(!isRunning){
      isRunningRef.current = true
    }
  }
  return {
    grid,
    isRunning,
    onClickCell,
    onClickStarted
  };
}