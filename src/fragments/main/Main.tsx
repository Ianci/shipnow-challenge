import GridComponent from '../../components/grid/Grid';
import StartButton from '../../components/buttons/start-button/StartButton';
import { useMainController } from '../../hooks/useMainController';
import ResetButton from '../../components/buttons/reset-button/ResetButton';
import RandomButton from '../../components/buttons/random-button/RandomButton';
import IntervalInput from '../../components/interval-input/IntervalInput';
import GenerationCount from '../../components/generation-count/GenerationCount';
import SaveButton from '../../components/buttons/save-button/SaveButton';
import StepButton from '../../components/buttons/step-button/StepButton';


const Main = () => {
  const { grid, isRunning, speed, generationCount,onClickStarted, 
    onClickCell, onClickResetButton, onClickRandomButton,
    handleChangeInterval, onClickSaveButton, onClickStepButton
  } = useMainController();
 
  return (
    <div className="main">
      <GridComponent grid={grid} onClickCell={onClickCell}/>
      <div className="options">
        <div className="buttons">
          <StartButton isRunning={isRunning} onClickStarted={onClickStarted}/>
          <ResetButton onClickResetButton={onClickResetButton}/>
          <StepButton onClickStepButton={onClickStepButton} />
          <RandomButton onClickRandomButton={onClickRandomButton}/>
        </div>
          <IntervalInput speed={speed} handleChangeInterval={handleChangeInterval}/>
          <GenerationCount generationCount={generationCount}/>
          <SaveButton onClickSaveButton={onClickSaveButton}/>
      </div>
    </div>
  );
};

export default Main;
