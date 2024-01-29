import styled from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;

  cursor: pointer;
  line-height: 1.5rem;
`