import { Container, InputGroup } from "./style";


// eslint-disable-next-line react/prop-types
export function TextArea({id, label, ...rest}){
  return(
    <InputGroup>
      <label htmlFor={id}>{label}</label>
      <Container>
        <textarea {...rest}/>
      </Container>
    </InputGroup>
    
  )
}