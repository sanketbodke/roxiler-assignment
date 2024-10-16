import styled from "styled-components";

export const CreateUserContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
`
export const Label = styled.label`
    font-size: 14px;
`

export const Input = styled.input`
    padding: 7px;
    border: 1px solid #2E2F30;
    outline: none;
    border-radius: 5px;
    width: 300px;
`

export const Select = styled.select`
    padding: 7px;
    border: 1px solid #2E2F30;
    outline: none;
    border-radius: 5px;
    width: 300px;
`

export const Button = styled.button`
    width: 150px;
    background-color: #49a0fc;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
`

export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const FormFiled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`