import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const AuthLayoutImage = styled.img`
    width: 550px;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 450px;
    gap: 15px;
    
    @media (max-width: 768px) {
        width: 100%; 
        padding: 0 20px; 
    }
`;

export const FormHeading = styled.h1`
    color: #49a0fc;
    padding-bottom: 20px;
`;

export const Label = styled.label`
    color: #000000;
    font-size: 18px;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #000000;
`;

export const Button = styled.button`
    background-color: #49a0fc;
    color: #ffffff;
    padding: 10px;
    width: 100px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`;