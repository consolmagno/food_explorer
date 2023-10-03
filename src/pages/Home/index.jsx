import { Header } from "../../components/Header";
import { Container, Hero, Content } from "./style";
import {Input} from "../../components/Input"
import {FiSearch} from "react-icons/fi"
import { Footer } from "../../components/Footer";
import imgHeroSection from "../../assets/heroSection.png"

export function Home(){
  return(
    <Container>
      <Header>
        <Input type="text" placeholder="Busque por pratos ou ingredientes" id="search" icon={FiSearch}/>
      </Header>
      <Content>
        <Hero>
          <img src={imgHeroSection} alt="" />
            <div className="heroText">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Hero>
      </Content>
      <Footer/>
    </Container>
  )
}