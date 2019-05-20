import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ChiroLogo = styled.img`
    height: 50px;
    width: 50px;
`
export const HamMenu = styled.div`
    width: 50px;
    height: 50px;
    @media (min-width: 650px) {
        display: none;
    }
`
export const LogoLink = styled(Link)`
    display: flex;
`
export const NavbarContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    background: white;
    border-bottom: 1px solid gray;
    @media (min-width: 700px) {
        padding: 10px 24px;
    }
`
export const BusinessName = styled.h1`
    font-size: 24px;
    color: gray;
    display: block;
    margin-left: 10px;
    /* @media (min-width: 650px) {
        display: block;
    } */
`