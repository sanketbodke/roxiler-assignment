import styled from "styled-components";

export const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    margin: 20px 0;
`;

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

export const Button = styled.button`
    background-color: #ffffff;
    border: 1px solid #2E2F30;
    padding: 5px 10px;
    border-radius: 5px;
`