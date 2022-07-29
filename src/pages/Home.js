import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Logo />
            <Navbar />
            <Countries />
        </div>
    );
};

export default Home;