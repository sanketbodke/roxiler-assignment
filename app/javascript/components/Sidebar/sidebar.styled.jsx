import styled from "styled-components";
import { Link } from "react-router-dom"

export const SidebarContainer = styled.aside`
    width: 300px;
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    height: 100vh;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
`

export const SidebarItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 16px;
`

export const SidebarLink = styled(Link)`
    padding: 10px;
    color: black; 
    text-decoration: none; 
    border-radius: 4px; 
    transition: background-color 0.3s; 

    &.active {
        color: #ffffff;
        background-color: #49a0fc; 
    }

    &:hover {
        background-color: rgba(73, 160, 252, 0.8); 
    }
`;