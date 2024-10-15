import React from 'react';
import { HomeContainer } from "./home.styled";
import { Skeleton,  Statistic } from 'antd';
import useHome from "./useHome";

function Home() {
    const {
        count,
        loading,
        error
    } = useHome()

    return (
        <HomeContainer>
            {loading ? (
                <Skeleton active />
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                    <Statistic title="Total Users" value={count.total_users} />
                    <Statistic title="Total Stores" value={count.total_stores} />
                    <Statistic title="Total Ratings" value={count.total_ratings} />
                </>
            )}
        </HomeContainer>
    );
}

export default Home;