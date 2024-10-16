import React, { useState, useEffect } from 'react';
import { UserRatingsContainer, SearchAndAddButton, SearchInput, AddNewButton, StyledTable, TableHeader, TableRow, TableCell } from './userRatings.styled'; // Import your styled components
import apiUrl from '../../../constant/apiUrl';
import axios from 'axios';
import currentUser from '../../../utils/currentUser';
import {Link} from "react-router-dom";

function UserRatings() {
    const { user } = currentUser();
    const token = user.data.token;

    const [stores, setStores] = useState([]);

    const getStoreRatings = async () => {
        try {
            const response = await axios.get(`${apiUrl.listStores}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setStores(response.data);
        } catch (error) {
            console.error("Error fetching store ratings:", error);
        }
    };

    const calculateAverageRating = (ratings) => {
        if (ratings.length === 0) return 0;
        const totalScore = ratings.reduce((acc, rating) => acc + rating.score, 0);
        return (totalScore / ratings.length).toFixed(2);
    };

    useEffect(() => {
        getStoreRatings();
    }, []);

    return (
        <UserRatingsContainer>
            <SearchAndAddButton>
                <SearchInput placeholder="Search..." />
                <Link
                    to="/stores/ratings/add">
                    <AddNewButton>Add New</AddNewButton>
                </Link>
            </SearchAndAddButton>
            <StyledTable>
                <thead>
                <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Address</TableHeader>
                    <TableHeader>Owner Email</TableHeader>
                    <TableHeader>Average Rating Score</TableHeader>
                </TableRow>
                </thead>
                <tbody>
                {stores.map((store) => (
                    <TableRow key={store.id}>
                        <TableCell>{store.name}</TableCell>
                        <TableCell>{store.email}</TableCell>
                        <TableCell>{store.address}</TableCell>
                        <TableCell>{store.user.email}</TableCell>
                        <TableCell>
                            {calculateAverageRating(store.ratings)}
                        </TableCell>
                    </TableRow>
                ))}
                </tbody>
            </StyledTable>
        </UserRatingsContainer>
    );
}

export default UserRatings;