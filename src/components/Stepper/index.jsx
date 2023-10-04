import {FiPlus, FiMinus} from "react-icons/fi"
import { Container } from "./style"
export function Stepper(){
  return(
    <Container>
      <button><FiPlus size={24}/></button>
      <span>00</span>
      <button><FiMinus size={24}/></button>
      
    </Container>

  )
}