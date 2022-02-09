import React from 'react';
import Foods from '../../Foods/Foods';
import Students from '../../Students/Students';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner/>
            <Students/>
            <Foods/>
        </>
    );
};

export default Home;