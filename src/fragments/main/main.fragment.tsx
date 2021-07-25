import GridComponent from '../../components/grid/Grid';
import StartButton from '../../components/buttons/start-button/StartButton';
import { useMainController } from '../../hooks/useMainController';
import ResetButton from '../../components/buttons/reset-button/ResetButton';
import RandomButton from '../../components/buttons/random-button/RandomButton';
import IntervalInput from '../../components/interval-input/IntervalInput';
import GenerationCount from '../../components/generation-count/GenerationCount';
import React from 'react';

const Main = () => {
  const { grid, isRunning, onClickStarted , onClickCell } = useMainController();
  console.log(grid)
  return (
    <div className="main">
      <GridComponent grid={grid} onClickCell={onClickCell}/>
      <div className="options">
        <div className="buttons">
          <StartButton isRunning={isRunning} onClickStarted={onClickStarted}/>
          <ResetButton isRunning={isRunning} onClickStarted={onClickStarted}/>
          <RandomButton isRunning={isRunning} onClickStarted={onClickStarted}/>
        </div>
          <IntervalInput />
          <GenerationCount generateCount={0}/>
      </div>
    </div>
  );
};

export default Main;
