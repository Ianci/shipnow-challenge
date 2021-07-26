export interface IUseMainControllerOutput {
    grid: number[][];
    speed: number;
    isRunning: boolean;
    generationCount: number;
    onClickCell: (mappedGrid: number[][], i: number, k: number) => void;
    onClickStarted: () => void;
    onClickResetButton: () => void;
    onClickRandomButton: () => void;
    handleChangeInterval: (e: any) => void;
    onClickSaveButton: () => void
}