import { Header } from "../../components/Header";
import { Container } from "./style";
import {Input} from "../../components/Input"
import {FiSearch} from "react-icons/fi"

export function Home(){
  return(
    <Container>
      <Header>
        <Input type="text" placeholder="Busque por pratos ou ingredientes" id="search" icon={FiSearch}/>
      </Header>
    </Container>
  )
}