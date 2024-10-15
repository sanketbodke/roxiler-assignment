import React from 'react';
import {AddNewButton, ListStoreContainer, SearchAndAddButton, SearchInput} from "./list.styled";
import {Link} from "react-router-dom";
import SectionHeading from "../../../components/SectionHeading/SectionHeading.component";
import useList from "./useList";
import StoreTable from "../../../components/StoreTable/StoreTable.component";
function ListStores() {
    const {
        stores
    } = useList()
    return (
        <ListStoreContainer>
            <SectionHeading
                heading="Stores"
            />
            <SearchAndAddButton>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                />
                <Link to="/stores/create">
                    <AddNewButton>
                        Add Store
                    </AddNewButton>
                </Link>
            </SearchAndAddButton>
            <StoreTable
                stores={stores}
            />
        </ListStoreContainer>
    );
}

export default ListStores;