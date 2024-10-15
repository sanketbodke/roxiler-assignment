import React from 'react';
import { HomeContainer } from "./home.styled";
import { Skeleton } from 'antd';
import useHome from "./useHome";
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip,
} from 'recharts';

import SectionHeading from "../../components/SectionHeading/SectionHeading.component";

function Home() {
    const {
        count,
        loading,
        error,
        COLORS,
        data
    } = useHome();

    return (
        <HomeContainer>
            {loading ? (
                <Skeleton active />
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                   <SectionHeading
                    heading="Overview"
                   />
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </>
            )}
        </HomeContainer>
    );
}

export default Home;