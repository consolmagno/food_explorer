import styled from "styled-components";

export const Container = styled.div`

`
export const Content = styled.div`
  padding: calc(2.75rem + 7rem) 1.75rem;
  
`

export const Hero = styled.div`
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 2.917px;
  display: flex;
  align-items: end;

  img{
    height: 9.3rem;
    margin-top: -30px;
    margin-left: -30px;
  }

  .heroText{
    margin-left: -80px;
  }

  .heroText h2{
    font-family: Poppins;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 0.2rem;

  }

  .heroText p{
    font-family: Poppins;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 1.4rem;
  }

  
  @media screen and (min-width: 1000px){

  img{
    height: 25.4rem;
  }

  .heroText h2{
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  .heroText p{
    font-family: Roboto;
    font-size: 1rem;
    line-height: 100%;
    font-weight: 400;
    margin-bottom: 5.75rem;
  }
    
  }
`