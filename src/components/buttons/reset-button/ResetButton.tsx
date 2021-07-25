export interface IResetButtonProps {
    isRunning: boolean;
    onClickStarted: () => void;
}
const ResetButton = ({isRunning, onClickStarted}: IResetButtonProps) => {
    return (
        <button
        onClick={() => onClickStarted()}
        >
            Reset
        </button>
    );
};
export default ResetButton;