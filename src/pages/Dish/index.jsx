import { Container, Content, Tags } from "./style";
import {FiChevronLeft, FiSearch} from "react-icons/fi"
import {PiReceiptBold} from "react-icons/pi"
import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {Footer} from "../../components/Footer"
import { Tag } from "../../components/Tag";
import {Stepper} from "../../components/Stepper"
import { Button } from "../../components/Button";

export function Dish(){
  return(
    <Container>
      <Header>
        <Input type="text" placeholder="Busque por pratos ou ingredientes" id="search" icon={FiSearch}/>
      </Header>
      <Content>
      <a><FiChevronLeft/> voltar</a>
      <div className="image"></div>
      <h2>Salada Ravanello</h2>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
      <Tags>
        <Tag title="alface"/>
        <Tag title="cebola"/>
        <Tag title="pão naan"/>
        <Tag title="pepino"/>
      </Tags>
      <div className="Buttons">
        <Stepper/>
        <Button title="pedir - R$ 25,00" icon={PiReceiptBold}/>
      </div>
      </Content>
      <Footer/>
    </Container>
  )
}