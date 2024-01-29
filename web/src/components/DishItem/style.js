import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme, isNew}) =>  isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  border: ${({theme, isNew}) => isNew ? ` 1px dashed ${theme.COLORS.LIGHT_500}` : 'none' };
  border-radius: 8px;

  /* display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem; 
  

  input{
    background-color: transparent;
    color: ${({theme, isNew}) =>  isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;

    height: 2rem;
    width: auto;
  }

  button{
    background-color: transparent;
    color: ${({theme, isNew}) =>  isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  } */
`