import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({theme}) => theme.COLORS.DARK_400};
  /* position: fixed; */
  z-index: 3;
  bottom: 0;
  width: 100vw;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem 1.75rem;

  img{
    height: 1.125rem;
  }

  span{
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    font-size: 0.75rem;
  }

  @media screen and (min-width: 1000px){
    padding: 1.875rem 0;
    max-width: 1000px;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    
    img{
    height: 1.875rem;
    }

    span{
    font-size: 0.875rem;
    }
  }
`