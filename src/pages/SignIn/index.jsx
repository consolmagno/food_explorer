import { Container, Content } from "./style"
import { Input } from "../../components/Input"
import HorizontalLogo from "../../assets/horizontal_logo.svg"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignIn(){
  return(
    <Container>
        <Content>
          <img src={HorizontalLogo} alt=""/>
          <form>
            <h1>Faça login</h1>
            <Input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" id="email"/>
            <Input type="text" placeholder="No mínimo 6 caracteres" label="Senha" id="password"/>
            <Button title="Entrar"></Button>
            <ButtonText title="Criar uma conta"></ButtonText>
          </form>
        </Content>  
    </Container>
  )
}