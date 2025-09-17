type DecreaseBtnProps = {
  onDec: () => void;
};

function DecreaseBtn({ onDec }: DecreaseBtnProps) {
  return (
    <button onClick={onDec}>-</button>
  )
}

export default DecreaseBtn
