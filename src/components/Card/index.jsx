import { Container } from "./style";
import {Button} from "../Button"
import {FiHeart, FiChevronRight} from "react-icons/fi"
import { Stepper } from "../Stepper";

export function Card(){
  return(
    <Container>
      <button className="heartIcon"><FiHeart size={24}/></button>
      {/* <img src="" alt="" /> */}
      <div className="image"></div>
      <p>Salada Ravanello<FiChevronRight  size={12}/></p>
      <span>R$ 49,97</span>
      <Stepper></Stepper>
      <Button title="incluir"></Button>
    </Container>
  )
}