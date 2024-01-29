import { Container, InputGroup } from "./style" 

// eslint-disable-next-line react/prop-types
export function Input({icon: Icon, id, label, ...rest}){
  return(
    <InputGroup>
      <label htmlFor={id}>{label}</label>
      <Container>
        {Icon && <Icon size={20}/> }
        <input {...rest}/>
      </Container>
    </InputGroup>
   
    
  )
}