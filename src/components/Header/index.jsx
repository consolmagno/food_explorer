import { Container, Content } from "./style";
import HorizontalLogo from "../../assets/horizontal_logo.svg"
import {PiReceiptBold} from "react-icons/pi"
import {FiMenu, FiX } from "react-icons/fi"

// eslint-disable-next-line react/prop-types
export function Header({children}){
  return (
    <Container>
      <nav className="">
        <div className="toggle icon-menu"><FiMenu size={24}/></div>
        <img src={HorizontalLogo} alt="Logotipo Food Explorer"/>
        <div className="menu">
          <Content>
            <div className="toggle icon-close"><FiX size={24}/>Menu</div>
            {children}
            <span>Sair</span>
          </Content>
        </div>
        <div className="toggle"><PiReceiptBold size={24}/></div>
      </nav>
      
    </Container>
  )
}