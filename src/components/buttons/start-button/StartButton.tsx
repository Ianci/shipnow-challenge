export interface IStartButtonProps {
    isRunning: boolean;
    onClickStarted: () => void;
}
const StartButton = ({isRunning, onClickStarted}: IStartButtonProps) => {
    return (
        <button
        className="button"
        onClick={() => onClickStarted()}
        >
            {isRunning ? 'Stop' : 'Start'}
        </button>
    );
};
export default StartButton;