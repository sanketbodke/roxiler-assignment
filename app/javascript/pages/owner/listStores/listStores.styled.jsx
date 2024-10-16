import styled from "styled-components";

export const ListStoreContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
`
export const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    overflow-y: scroll;
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