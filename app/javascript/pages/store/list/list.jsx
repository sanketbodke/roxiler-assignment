import React, { useState, useEffect } from 'react';
import { AddNewButton, ListStoreContainer, SearchAndAddButton, SearchInput } from "./list.styled";
import { Link } from "react-router-dom";
import SectionHeading from "../../../components/SectionHeading/SectionHeading.component";
import useList from "./useList";
import StoreTable from "../../../components/StoreTable/StoreTable.component";

function ListStores() {
    const { stores } = useList();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStores = stores.filter(store => {
        const storeNameMatch = store.name.toLowerCase().includes(searchTerm.toLowerCase());
        const storeEmailMatch = store.user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const storeAddressMatch = store.address.toLowerCase().includes(searchTerm.toLowerCase());
        return storeNameMatch || storeEmailMatch || storeAddressMatch;
    });

    return (
        <ListStoreContainer>
            <SectionHeading heading="Stores" />
            <SearchAndAddButton>
                <SearchInput
                    type="text"
                    placeholder="Search by Name, Email, or Address..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link to="/stores/create">
                    <AddNewButton>
                        Add Store
                    </AddNewButton>
                </Link>
            </SearchAndAddButton>
            <StoreTable stores={filteredStores} />
        </ListStoreContainer>
    );
}

export default ListStores;