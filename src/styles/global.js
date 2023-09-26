import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  input, textarea{
    outline: none;
  }

  body{
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem ;
    

  }
`