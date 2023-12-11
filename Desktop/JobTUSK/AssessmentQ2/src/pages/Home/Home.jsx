import React from 'react';
import useAllData from '../../hooks/useAllData';
import Loader from '../../common/Loader';
import Card from '../../components/Card/Card';

const Home = () => {
    const { isPending, error, data, refetch } = useAllData()

    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <Card cards={data}></Card>
        </div>
    );
};

export default Home;