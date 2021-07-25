export interface IRandomButtonProps {
    isRunning: boolean;
    onClickStarted: () => void;
}
const RandomButton = ({isRunning, onClickStarted}: IRandomButtonProps) => {
    return (
        <button
        className="button"
        onClick={() => onClickStarted()}
        >
            Random
        </button>
    );
};
export default RandomButton;