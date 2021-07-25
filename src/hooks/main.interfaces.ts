export interface IUseMainControllerOutput {
    grid: number[][];
    isRunning: boolean;
    onClickCell: (mappedGrid: number[][], i: number, k: number) => void;
    onClickStarted: () => void;
}