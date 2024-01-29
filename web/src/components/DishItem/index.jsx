import { Container } from "./style"
import {FiPlus, FiX} from "react-icons/fi"

// eslint-disable-next-line react/prop-types
export function DishItem({isNew}){
  return(
    <Container
      $isNew={isNew}
      >
      <input 
        type="text"
        />
      <button
        type="button"
        >Enviar</button>
    </Container>
  )
}