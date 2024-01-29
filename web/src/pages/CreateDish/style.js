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
  gap: 1.5rem;
  flex-grow: 1;

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
`
export const Image = styled.div`
  label{
    display: grid;
    gap: 1rem;
  }

  p{
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    line-height: 1rem;
  }
  .ImageInput{
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    
    display: flex;
    gap: 0.5rem;
    align-items: center;
    height: 3rem;
    border-radius: 5px;
    padding: 0.75rem 2rem;

    span{
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 171.429%;
    }
  }

  
  input {
    display: none;
  }
`
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
`