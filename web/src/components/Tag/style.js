import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  text-align: center;
  padding: 0.25rem 0.5rem;

  span{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: Poppins;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 170%;
  }
`