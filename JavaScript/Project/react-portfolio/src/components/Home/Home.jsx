import React from 'react';
import './Home.css';
import CTA from './CTA';
import me from '../../assets/me.png';
import HomeSocials from './HomeSocials';

const Home = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Nikhil Gorule</h1>
                <h5 className="text-light">MERN Stack Developar || Frontend Developar</h5>
                <CTA />
                <HomeSocials />

                <div className="me">
                    <img src={me} alt="ME" />
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Home