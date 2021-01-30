import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0 ;
    box-sizing: border-box;
  }

  body{
    width:100%;
    height:100%;
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px Roboto, sans-serif;
  }

  #root{
    max-width: 342px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
  }
`;
