interface IGenerationCountProps {
  generationCount: number
}

const GenerationCount = ({generationCount}: IGenerationCountProps) => (
  <div className="generation__count">
    <h2 className="generation__count-h2">
      Generation: # {''}
      {generationCount}
    </h2>
  </div>
);

export default GenerationCount;
