import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Content = styled.div`
  padding: calc(1rem + 7rem) 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;

  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .return{
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 140%;

    display: flex;
    align-items: center;
    margin-right: auto;
    cursor: pointer;
  }

  .image{
    height: 16.5rem;
    width: 16.5rem;
    background-color: red;
    border-radius: 50%;
  }

  .dish-description{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .dish-description h2{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 140%;
  }

  .dish-description p{
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
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 750px){
    padding: calc(2rem + 7rem) 1.75rem 0;
    gap: 2rem;

    .main{
      flex-direction: row;
      gap: 2rem;
    }

    .dish-description{
      max-width: 26rem;
    }
    
    .dish-description p{
      text-align: left;
    }
  }

  @media screen and (min-width: 1200px){
    padding: calc(6rem + 7rem) 0 1rem;
    max-width: 1000px;
    margin: 0 auto;

    .main{
      gap: 2.5rem;
    }

    .image{
      height: 22rem;
      width: 22rem;
    }

    .dish-description{
      max-width: 38rem;
    }
    
    .dish-description h2{
      font-size: 2.5rem;
    }

    .dish-description p{
      font-size: 1.5rem;
      text-align: left;
    }
  }
`
export const Tags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media screen and (min-width: 750px){
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
  }

`