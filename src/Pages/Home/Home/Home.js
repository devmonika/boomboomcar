import React from 'react';
import About from '../../About/About';
import Services from '../../Services/Services';
import Heroarea from '../Heroarea/Heroarea';

const Home = () => {
    return (
        <div>
            <Heroarea></Heroarea>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;