import React from 'react'
import { HomeWrapper } from './styled-components/Home';
import Hero from './Hero';
import HomeServices from './HomeServices';
import About from './About';

export default function Home() {
    return(
        <HomeWrapper className="home-wrapper">
            <Hero/>
            <HomeServices/>
            <About/>
        </HomeWrapper>
    )
}