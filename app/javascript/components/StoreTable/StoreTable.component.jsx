import React from 'react';
import {StyledTable, TableCell, TableContainer, TableHeader, TableRow} from "./storeTable.styled";

function StoreTable({stores}) {
    return (
        <TableContainer>
            <StyledTable>
                <thead>
                <TableRow>
                    <TableHeader>Store Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Address</TableHeader>
                    <TableHeader>Owner</TableHeader>
                </TableRow>
                </thead>
                <tbody>
                {stores.map(store => (
                    <TableRow key={store.id}>
                        <TableCell>{store.name}</TableCell>
                        <TableCell>{store.email}</TableCell>
                        <TableCell>{store.address}</TableCell>
                        <TableCell>{store.user.email}</TableCell>
                    </TableRow>
                ))}
                </tbody>
            </StyledTable>
        </TableContainer>
    );
}

export default StoreTable;