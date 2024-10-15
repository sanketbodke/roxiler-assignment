import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
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

export const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
`

export const Layout = styled.div`
    display: flex;
    padding: 30px 15px;
    background-color: #F7F7F7;
    gap: 20px;
`