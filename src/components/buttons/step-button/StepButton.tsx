export interface IStepButton {
    onClickStepButton: () => void;
}
const StepButton = ({onClickStepButton}: IStepButton) => {
    return (
        <button
        className="button"
        onClick={() => onClickStepButton()}
        >
           Step
        </button>
    );
};
export default StepButton;