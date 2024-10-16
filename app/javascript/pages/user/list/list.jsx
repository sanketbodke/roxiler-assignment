import React, { useState } from 'react';
import { AddNewButton, ListUserContainer, SearchAndAddButton, SearchInput } from "./list.styled";
import UserTable from "../../../components/UserTable/UserTable.component";
import SectionHeading from "../../../components/SectionHeading/SectionHeading.component";
import { Link } from "react-router-dom";
import useList from "./useList";

function List() {
    const { users } = useList();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user => {
        const emailMatch = user.email.toLowerCase().includes(searchTerm.toLowerCase());

        const roleMatch = user.roles.some(role =>
            role.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return emailMatch || roleMatch;
    });

    return (
        <ListUserContainer>
            <SectionHeading heading="Users" />
            <SearchAndAddButton>
                <SearchInput
                    placeholder="Search by Email or Role..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link to="/users/create" style={{ color: '#ffffff' }}>
                    <AddNewButton>
                        Add User
                    </AddNewButton>
                </Link>
            </SearchAndAddButton>
            <UserTable users={filteredUsers} />
        </ListUserContainer>
    );
}

export default List;