import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_200};

  max-width: 13.125rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  position: relative;

  .heartIcon{
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    .active svg{
      /* fill: ${({theme}) => theme.COLORS.LIGHT_300}; */
      color: red;
    }
    
  }

  .image{
    background-color: ${({theme}) => theme.COLORS.CAKE_200};
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  a{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  span{
    color: ${({theme}) => theme.COLORS.CAKE_200};
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
  }
`