import { Container, Content } from "./style";
import HorizontalLogo from "../../assets/horizontal_logo_gray.svg"

export function Footer(){
  return(
    <Container>
      <Content>
        <img src={HorizontalLogo} alt="Logotipo Food Explorer"/>
        <span>© 2023 - Todos os direitos reservados.</span>
      </Content>
    </Container>
  )
}