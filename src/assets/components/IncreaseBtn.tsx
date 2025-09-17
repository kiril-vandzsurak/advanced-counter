type IncreaseBtnProps = {
  onInc: () => void;
};

function IncreaseBtn({ onInc }: IncreaseBtnProps) {
  return (
    <button onClick={onInc}>+</button>
  )
}

export default IncreaseBtn
