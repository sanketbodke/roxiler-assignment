import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
        letter-spacing: 1px;
    }
    
    a{
        text-decoration: none;
        color: #000000;
    }
    
    ul{
        list-style: none;
    }
    
`;