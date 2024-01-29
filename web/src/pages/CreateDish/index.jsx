import { Container, Content, Image, Tags} from "./style";
import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import { Input} from "../../components/Input"
import {FiSearch, FiChevronLeft, FiUpload} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Select/Index";
import { DishItem } from "../../components/DishItem";

export function CreateDish(){

  const navigate = useNavigate()
  async function handleReturn(){
    return navigate(-1)
  }
  return(
    <Container>
      <Header>
        <Input type="text" placeholder="Busque por pratos ou ingredientes" id="search" icon={FiSearch}/>
      </Header>
      <Content>
      <button  className="return" onClick={handleReturn}><FiChevronLeft/> voltar</button>
      <h2>Novo Prato</h2>
      
      <Image>
        <label htmlFor="avatar">
          <p>Imagem do prato</p>
          <div className="ImageInput">
            <FiUpload size={24}/>
            <span>Selecione um arquivo</span>
          </div>
          <input type="file" id="avatar"/>
          </label>
      </Image>
      <Input type="text" placeholder="Exemplo: Salada Caesar" label="Nome" id="name"/>
      <Select label="Categoria" id="type">
        <option value="ola">Refeição</option>
        <option value="ola2">2</option>
      </Select>
      <Tags>
        <DishItem isNew />
      </Tags>
      
      <Input type="number" placeholder="R$ 00,00" label="Preço" id="price"/>
      <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" label="Descrição" id="description"/>
        
      </Content>
      <Footer/>
    </Container>
  )
}