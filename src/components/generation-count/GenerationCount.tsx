interface IGenerationCountProps {
  generateCount: number
}

const GenerationCount = (props: IGenerationCountProps) => (
  <div className="generation__count">
    <h2>
      Generation: #
      {props.generateCount}
    </h2>
  </div>
);

export default GenerationCount;
