export interface IResetButtonProps {
    onClickResetButton: () => void;
}
const ResetButton = ({onClickResetButton}: IResetButtonProps) => {
    return (
        <button
        className="button"
        onClick={() => onClickResetButton()}
        >
            Reset
        </button>
    );
};
export default ResetButton;