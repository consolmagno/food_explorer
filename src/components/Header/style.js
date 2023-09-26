import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100vw;
  padding: 3.5rem 1.75rem;
  
  img{
    height: 25px;
  }

  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  nav .menu {
    display: none;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
  }

  nav.show .menu{
    display: block;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    opacity: 1;
    visibility: visible;

    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0; 
  }

  .toggle {
    cursor: pointer;
  }

  nav.show div.icon-close{
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

export const Content = styled.div`
  margin: 3.5rem 1.75rem;
  text-align: left;

  display: grid;
  place-content: left;
  gap: 2.25rem;

  span{
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2rem;
    cursor: pointer;
  }

  .icon-close{
    opacity: 0;
    visibility: hidden;
  }
`