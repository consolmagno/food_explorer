import styled from "styled-components";

export const Container = styled.div`
`

export const Content = styled.div`
  padding: calc(1rem + 7rem) 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 140%;

    display: flex;
    align-items: center;
    margin-right: auto;
  }

  .image{
    height: 16.5rem;
    width: 16.5rem;
    background-color: red;
    border-radius: 50%;
  }

  h2{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 140%;
  }

  p{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    text-align: center;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 400;
    line-height: 140%;
  }

  .Buttons{
    display: flex;
    gap: 1rem; 
  }
`
export const Tags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

`