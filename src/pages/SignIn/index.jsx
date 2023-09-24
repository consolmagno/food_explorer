import { Container } from "./style"
import { Input } from "../../components/Input"
import HorizontalLogo from "../../assets/horizontal_logo.svg"

export function SignIn(){
  return(
    <Container>
      <img src={HorizontalLogo} alt="" />
      {/* <h1>Faça login</h1> */}
      <div>
        <Input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" id="email"/>
        <Input type="text" placeholder="No mínimo 6 caracteres" label="Senha" id="password"/>
      </div>
    </Container>
  )
}