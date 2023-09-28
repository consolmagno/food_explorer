import styled from "styled-components";

export const InputGroup = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${({theme}) => theme.COLORS.LIGHT_400};
  font-size: 1rem;
  line-height: 1rem;

  display: grid;
  gap: 0.5rem;

`

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  color: ${({theme}) => theme.COLORS.LIGHT_400};

  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  height: 3rem;
  padding: 0.875rem 0.75rem;
  border-radius: 5px;

  input{
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_500};
    
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-size: 0.95rem;
    line-height: 1rem;
  }

  @media screen and (min-width: 1000px){
    width: 500px;
  }

  
`

