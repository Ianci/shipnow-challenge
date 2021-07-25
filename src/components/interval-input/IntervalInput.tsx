const IntervalInput = () => {
    return (
        <div className="">
        <label htmlFor="interval">Intervalo en ms</label>
        <input type="number" id="interval" onChange={() => console.log('xd')}/>
        </div>  
    )
}
export default IntervalInput