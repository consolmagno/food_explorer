import {FiPlus, FiMinus} from "react-icons/fi"
import { Container } from "./style"
import { useState } from "react"

export function Stepper(){
  const [amount, setAmount] = useState(0)

  function addAmount(){
    setAmount(prevState => prevState + 1)
  }

  function removeAmount(){
    if(amount > 0){
      setAmount(prevState => prevState - 1)
    }
    else{
      setAmount(0)
    }
    
  }

  return(
    <Container>
      <button onClick={addAmount}><FiPlus size={24}/></button>
      <span>{amount}</span>
      <button onClick={removeAmount}><FiMinus size={24}/></button>
      
    </Container>

  )
}