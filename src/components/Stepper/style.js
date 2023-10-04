import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.875rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;

  button{
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  span{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
  }
`