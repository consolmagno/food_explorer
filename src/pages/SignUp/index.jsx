import { Container, Content } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import HorizontalLogo from "../../assets/horizontal_logo.svg"

export function SignUp(){
  return(
    <Container>
      <Content>
          <img src={HorizontalLogo} alt=""/>
          <form>
            <h1>Faça login</h1>
            <Input type="text" placeholder="Exemplo: Maria da Silva" label="Seu Nome" id="name"/>
            <Input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" id="email"/>
            <Input type="password" placeholder="No mínimo 6 caracteres" label="Senha" id="password"/>
            <Button title="Criar conta"></Button>
            <ButtonText title="Já tenho uma conta"></ButtonText>
          </form>
        </Content>  
    </Container>

  )
}