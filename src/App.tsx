import { useState } from 'react'
import './App.css'
import IncreaseBtn from './assets/components/IncreaseBtn'
import DecreaseBtn from './assets/components/DecreaseBtn'
import InputField from './assets/components/InputField'

function App() {
  //adding reviewer
  const [counterValue, setCounterValue] = useState<number>(0)
  const [inputValue, setInputValue] = useState<number>(1)

  const handleInc = () => setCounterValue(prev => prev + inputValue)
  const handleDec = () => {
    if (counterValue - inputValue < 0){
        alert("Counter can't be negative")
    }else{
        setCounterValue(prev => prev - inputValue)
    }
  }

  return (
    <div className="page">
      <div className="controls">
        <DecreaseBtn onDec={handleDec}/>
        <InputField 
          startVal={inputValue}
          setNum={(next: number) => setInputValue(next)}
        />
        <IncreaseBtn onInc={handleInc}/>
      </div>

      <div className="result">
        {counterValue}
      </div>
    </div>
  )
}

export default App
