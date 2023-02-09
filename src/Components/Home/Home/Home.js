import React from 'react';
import Foods from '../../Foods/Foods';
import Banner from '../Banner/Banner';
import About from './../../About/About';
import Contact from './../../Contact/Contact';

const Home = () => {
    return (
        <>
            <Banner />
            <Foods />
            <About />
            <Contact />
        </>
    );
};

export default Home;