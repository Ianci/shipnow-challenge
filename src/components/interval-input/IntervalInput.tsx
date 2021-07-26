interface InIntervalInput {
    speed: number;
    handleChangeInterval: (e: any) => void;
}
const IntervalInput = ({speed, handleChangeInterval}: InIntervalInput) => {
    return (
        <div className="interval__container">
            <label htmlFor="interval" className="interval__container-label">Intervalo en ms</label>
            <input type="number" id="interval"
            defaultValue={speed}
            className="interval__container-input"
             onChange={handleChangeInterval}
             />
        </div>  
    )
}
export default IntervalInput