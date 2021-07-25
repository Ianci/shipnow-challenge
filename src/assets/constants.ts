export const numRows = 30;
export const numCols = 50;
//This array represents the eight neighbors surrounding a cell
// Directions: N, S, E, W, NE, NW, SE, SW
export const positions = [
    [0, 1], // right
    [0, -1], // left
    [1, -1], // top left
    [-1, 1], // top right
    [1, 1], // top
    [-1, -1], // bottom
    [1, 0], // bottom right
    [-1, 0], // bottom left
  ];