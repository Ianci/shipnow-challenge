
import { useCallback, useEffect, useRef, useState } from 'react';
import { numCols, numRows, positions } from '../assets/constants';
import {IUseMainControllerOutput} from './main.interfaces';
import useInterval from './useInterval';

export const useMainController = (): IUseMainControllerOutput => {
  const [speed, setSpeed] = useState(300);
  const [generationCount, setGenerationCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
 

  //Creando un multidimensional array y guardándolo en un state
 const generateEmptyGrid = (): number[][] => {
  const rowsArray= [];
  for (let i = 0; i < numRows; i++) {
    rowsArray.push(Array.from(Array(numCols), () => 0));
  };
  return rowsArray;
  };

  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid()
  });

  
  //Generando random grid
   const generateRandomGrid = (): number[][] => {
    const rowsArray= [];
    for (let i = 0; i < numRows; i++) {
      rowsArray.push(Array.from(Array(numCols), () => Math.random() > 0.5 ? 1 : 0));
    }
    return rowsArray as number[][];
  };

  //LocalStorage grid
  //Al renderizar nuestra app se fija si hay un grid guardado en el localStorage y lo guarda en nuestro state
  useEffect(() => {
    const localStorageGrid = localStorage.getItem('grid');
    if(localStorageGrid){
      setGrid(JSON.parse(localStorageGrid))
    }
  }, [])

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

  //Lógica del juego
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
        //Reglas
        if ( surrounderCells < 2 || surrounderCells > 3){
          newGrid[i][j] = 0
        } else if (grid[i][j] === 0 && surrounderCells === 3) {
          newGrid[i][j] = 1;
        }
      }
    }
    setGrid(newGrid)
  }, [])

  
  //Permitir al usuario cambiar el intervalo de tiempo
  const handleChangeInterval = (e: any) => {
    setSpeed(Number(e.target.value))
  }

  //Contador
  const handleGenerationCount = () => {
    if(isRunningRef.current){
      setGenerationCount(generationCount + 1)
    }
  }
  //useInterval hook para iniciar el juego
  //1. Empieza el juego
  //2. Ejecuta la función que maneja el contador
  //3. Vuelve a ejecutar las funciones que están dentro de la callback fn del hook en el delay establecido por defecto
  //O bien en el intervalo en ms que el usuario quiera
  useInterval(() => {
    handleStartGame(grid)
    handleGenerationCount()
  }, speed)

 
  //Start grid
  const onClickStarted = () => {
    setIsRunning(!isRunning)
    if(!isRunning){
      isRunningRef.current = true
    }
  }
  //Step btn
  //Cambia el isRunning a true y vuelve a false el mismo intervalo de tiempo que la función se ejecutaría normalmente
  const onClickStepButton = () => {
    setIsRunning(!isRunning)
    if(!isRunning){
      isRunningRef.current = true
    } 
    setTimeout(() => {
      setIsRunning(false)
    }, speed)
  }
  //Random grid
  const onClickRandomButton = () => {
    setGrid(generateRandomGrid())
    setGenerationCount(0)
  }
  //Reset grid
  const onClickResetButton = () => {
    setGrid(generateEmptyGrid())
    localStorage.removeItem('grid')
    setGenerationCount(0)
  }
  //Save grid pattern
  const onClickSaveButton = () => {
    localStorage.setItem('grid', JSON.stringify(grid) as string)
    alert('Guardado!')
  }
  return {
    grid,
    speed,
    isRunning,
    generationCount,
    onClickCell,
    onClickStarted,
    onClickResetButton,
    onClickRandomButton,
    onClickSaveButton,
    onClickStepButton,
    handleChangeInterval,
  };
}