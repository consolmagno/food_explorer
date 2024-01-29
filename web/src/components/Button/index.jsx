import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function Button({icon: Icon, title, isDisable, ...rest}){
  return(
    <Container
      type="button" 
      {...rest}
      isDisable={isDisable}
      >
      {Icon && <Icon size={24}/>}
      {title}
    </Container>
    
  )
}