type InputFieldProps = {
  startVal: number;
  setNum: (next: number) => void;
};

function InputField({ startVal, setNum }: InputFieldProps) {
  return (
    <input
      type="number"
      value={startVal}
      onChange={(e) => {
        const parsed = Number(e.target.value)
        setNum(Number.isFinite(parsed) ? parsed : 0)
      }}
      placeholder="Type your number"
    />
  )
}

export default InputField
