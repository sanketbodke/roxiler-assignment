import React from 'react';
import {AddNewButton, ListUserContainer, SearchAndAddButton, SearchInput} from "./list.styled";
import UserTable from "../../../components/UserTable/UserTable.component";
import SectionHeading from "../../../components/SectionHeading/SectionHeading.component";
import {Link} from "react-router-dom";
import useList from "./useList";
function List() {
    const {
        users
    } = useList()

    return (
        <ListUserContainer>
            <SectionHeading
                heading="Users"
            />
            <SearchAndAddButton>
                <SearchInput
                    placeholder="Search..."
                />
                <Link
                    to="/users/create"
                    style={{color: '#ffffff'}}
                >
                    <AddNewButton>
                        Add New
                    </AddNewButton>
                </Link>
            </SearchAndAddButton>
            <UserTable users={users}/>
        </ListUserContainer>
    );
}

export default List;