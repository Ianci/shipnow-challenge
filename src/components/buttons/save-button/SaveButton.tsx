export interface ISaveButton {
    onClickSaveButton: () => void;
}
const SaveButton = ({onClickSaveButton}: ISaveButton) => {
    return (
        <button
        className="button"
        onClick={() => onClickSaveButton()}
        >
            Save
        </button>
    );
};
export default SaveButton;