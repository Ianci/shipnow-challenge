import { colors } from "../../assets/colors"
import { numCols } from "../../assets/constants"




interface IGridComponentProps {
    grid: number[][]
    onClickCell: (mappedGrid: number[][], i: number, k: number) => void
}
const GridComponent = ({grid, onClickCell} :IGridComponentProps) => {
    return (
        <div className="grid__container"
        style={{ gridTemplateColumns: `repeat(${numCols}, 25px)`,}}
        >
            {grid.map((rows, i) =>
                rows.map((col, k) => (
                <div 
                    key={`${i}+${k}`}
                    className="grid__container-cell"
                    onClick={() => onClickCell(grid,i,k)}
                        style={{
                            borderRadius: '50%',
                            margin: '2.5px',
                            width: 12,
                            height: 12,
                            cursor: 'pointer',
                            backgroundColor: grid[i][k] ? colors.white : undefined,
                            border: `1px solid ${colors.white}`,
                            }}
                    />
                ))
            )}
        </div>
    )
}

export default GridComponent


