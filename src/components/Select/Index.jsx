import { Container, InputGroup } from "./style";

// eslint-disable-next-line react/prop-types
export function Select({id, label, children}){
  return(
    <InputGroup>
      <label htmlFor={id}>{label}</label>
      <Container>
        <select>
          {children}
        </select>
      </Container>
    </InputGroup>
  )
}