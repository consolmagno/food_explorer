import { Container, Content, Menu, Receipt } from "./style";
import HorizontalLogo from "../../assets/horizontal_logo.svg"
import {PiReceiptBold} from "react-icons/pi"
import {FiMenu, FiX, FiLogOut } from "react-icons/fi"
import {Button} from "../Button"

// eslint-disable-next-line react/prop-types
export function Header({children}){
    function mobileMenu(){
      const nav = document.getElementById('nav-menu')
      nav.classList.toggle('show') 
    }

  return (
    <Container>
      <Content className="nav-menu" id="nav-menu">
      <div className="toggle icon-menu" onClick={mobileMenu}><FiMenu size={24}/></div>
        <img src={HorizontalLogo} alt="Logotipo Food Explorer"/>
        <Menu className="menu">
          <div className="toggle icon-close" onClick={mobileMenu}><FiX size={24}/>Menu</div>
          {children}
          <span>Sair</span>
        </Menu>
        <Receipt>
          <div className="toggle icon-receipt">
            <PiReceiptBold size={24}/>
            <span>0</span>
          </div>
          <Button title="Pedidos (0)" icon={PiReceiptBold}/>
        </Receipt> 
        <div className="toggle icon-LogOut"><FiLogOut size={24}/></div>  
      </Content>
    </Container>
  )
}