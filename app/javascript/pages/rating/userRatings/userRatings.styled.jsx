import styled from "styled-components";

export const UserRatingsContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
`
export const SearchAndAddButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`

export const SearchInput = styled.input`
    width: 91%;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #2E2F30;
`

export const AddNewButton = styled.button`
    background-color: #49a0fc;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
`

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
`;

export const TableHeader = styled.th`
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
    padding: 10px;
    border-bottom: 1px solid #dddddd;
`;

export const ActionCell = styled(TableCell)`
    display: flex;
    align-items: center;
    gap: 7px;
`;