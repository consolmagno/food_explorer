import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  form{
    display: grid;
    gap: 2rem;

    h1{
    display: none;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    }
  }

  @media screen and (min-width: 1000px){
    flex-direction: row;
    gap: 15rem;

    form{
      width: 22rem;

      h1{
      display: inline;
      }
    }
  }
`
