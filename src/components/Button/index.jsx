import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function Button({title, isDisable, ...rest}){
  return(
    <Container
      type="button" 
      {...rest}
      isDisable={isDisable}
      >
      {title}
    </Container>
    
  )
}