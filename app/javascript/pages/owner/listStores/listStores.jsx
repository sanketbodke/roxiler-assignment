import React from 'react';
import { ListStoreContainer, TableContainer, StyledTable, TableHeader, TableRow, TableCell } from "./listStores.styled";
import SectionHeading from "../../../components/SectionHeading/SectionHeading.component";
import useListStore from './useListStore';

function ListOwnerStores() {
    const { stores} = useListStore();

    return (
        <ListStoreContainer>
            <SectionHeading heading="My Stores" />
            <TableContainer>
                <StyledTable>
                    <thead>
                    <TableRow>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Email</TableHeader>
                        <TableHeader>Address</TableHeader>
                        <TableHeader>Average Rating</TableHeader>
                    </TableRow>
                    </thead>
                    <tbody>
                    {stores.map(store => (
                        <TableRow key={store.id}>
                            <TableCell>{store.name}</TableCell>
                            <TableCell>{store.email}</TableCell>
                            <TableCell>{store.address}</TableCell>
                            <TableCell>{store.ratings.length ? (store.ratings.reduce((sum, rating) => sum + rating.score, 0) / store.ratings.length).toFixed(2) : 'N/A'}</TableCell>
                        </TableRow>
                    ))}
                    </tbody>
                </StyledTable>
            </TableContainer>
        </ListStoreContainer>
    );
}

export default ListOwnerStores;