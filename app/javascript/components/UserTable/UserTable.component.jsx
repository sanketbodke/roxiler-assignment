import React from 'react';
import {TableContainer, StyledTable, TableHeader, TableRow, TableCell, ActionCell, Button} from "./userTable.styled";

function UserTable({users}) {

    return (
        <TableContainer>
            <StyledTable>
                <thead>
                <TableRow>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Role</TableHeader>
                    <TableHeader>Created At</TableHeader>
                    <TableHeader>Updated At</TableHeader>
                </TableRow>
                </thead>
                <tbody>
                {users.map(user => (
                    <TableRow key={user.id}>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.roles.map(role => role.name).join(', ')}</TableCell>
                        <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(user.updated_at).toLocaleDateString()}</TableCell>
                    </TableRow>
                ))}
                </tbody>
            </StyledTable>
        </TableContainer>
    );
}

export default UserTable;