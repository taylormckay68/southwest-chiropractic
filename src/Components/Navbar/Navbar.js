import React from 'react';
import {NavbarContainer, HamMenu, ChiroLogo, LogoLink} from './styled-components/Navbar';
import logo from '../../assets/chiropractor-logo.png';

export default function Navbar(props) {
    return(
        <NavbarContainer className='navbar-container'>
            <HamMenu onClick={() => props.toggleMenu('menu')}>
                <svg viewBox="0 0 24 24">
                    <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" fontWeight="400" fontFamily="sans-serif" white-space="normal" overflow="visible"/>
                </svg>
            </HamMenu>
            <LogoLink to='/'>
                <ChiroLogo src={logo}/>
            </LogoLink>
        </NavbarContainer>
    )
}