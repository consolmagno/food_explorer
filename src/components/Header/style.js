import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({theme}) => theme.COLORS.DARK_400};
  position: fixed;
  z-index: 2;
  width: 100vw;
  padding: 3.5rem 1.75rem 1.5rem;
  
  img{
    height: 25px;
  }

  .toggle {
    cursor: pointer;
  }

  .nav-menu.show .menu{
    display: block;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    opacity: 1;
    visibility: visible;
    z-index: 3;

    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0; 
  }

  .nav-menu.show div.icon-close{
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .icon-LogOut{
    display: none;
  }

  @media screen and (min-width: 1000px){

    img{
    height: 30px;
  }

  .icon-LogOut{
    display: flex;
  }

  }
`
export const Content = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: 1000px;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;

  .menu {
    display: none;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
  }

  @media screen and (min-width: 1000px){
    display: flex;
    align-items: center;

    .icon-menu {
    display: none;
    }

    .menu {
    visibility: visible;
    opacity: 1;
    display: flex;
  }
  }
`
export const Menu = styled.div`
  padding: 3.5rem 1.75rem;
  
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

  @media screen and (min-width: 1000px){
    padding: 0;

    .icon-close{
      display: none;
    }

    span{
      display: none;
    }
  }
`
export const Receipt = styled.div`
  .icon-receipt{
    position: relative;
    z-index: 1;
  }

  span {
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};

    width: 20px;
    height: 20px;
    border-radius: 100%; 

    font-size: 0.875rem;
    text-align: center;
    
    position: absolute;
    top: -6px;
    right: -8px;
  } 
  
  button{
    display: none;
  }

  @media screen and (min-width: 1000px){
    .icon-receipt{
      display: none;
    }

    button{
    display: flex;
  }
  }
`

