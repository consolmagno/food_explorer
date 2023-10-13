import { Container } from "./style";
import {Button} from "../Button"
import {FiHeart, FiChevronRight} from "react-icons/fi"
import { Stepper } from "../Stepper";

export function Card(){

  function FavoriteItem(){
    const item = document.getElementById('heartIcon')
    item.classList.toggle('active')
    console.log(item) 
  }

  return(
    <Container>
      <button className="heartIcon" id="heartIcon" onClick={FavoriteItem}><FiHeart size={24}/></button>
      {/* <img src="" alt="" /> */}
      <div className="image"></div>
      <a>Salada Ravanello<FiChevronRight  size={12}/></a>
      <span>R$ 49,97</span>
      <Stepper></Stepper>
      <Button title="incluir"></Button>
    </Container>
  )
}