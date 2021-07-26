export interface IRandomButtonProps {
    onClickRandomButton: () => void;
}
const RandomButton = ({onClickRandomButton}: IRandomButtonProps) => {
    return (
        <button
        className="button"
        onClick={() => onClickRandomButton()}
        >
            Random
        </button>
    );
};
export default RandomButton;