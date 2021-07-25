import { numRows, numCols } from "./constants";

//Creating the multidimentional grid
export const generateGrid = () => {
    const rowsArray= [];
    for (let i = 0; i < numRows; i++) {
      rowsArray.push(Array.from(Array(numCols), () => 0));
    }
    console.log(rowsArray)
    return rowsArray;
  };