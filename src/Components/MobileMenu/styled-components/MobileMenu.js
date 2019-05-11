import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CloseIcon = styled.div`
    height: 50px;
    width: 50px;
`
export const CloseWrapper = styled.div`
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    box-sizing: border-box;
`
export const LinkWrapper = styled.div`
    width: 100%;
    padding-left: 20px;
    box-sizing: border-box;
`
export const MainLink = styled(Link)`
    font-size: 24px;
    text-decoration: none;
    color: black;
`
export const MainLinkContainer = styled.div`
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
`
export const MenuWrapper = styled.div`
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -300px;
    z-index: 2;
    cursor: pointer;
    background: white;
    border-right: 1px solid;
    transform: ${props => props.open && 'translateX(300px)'};
    transition: transform ease-in .3s;
    box-sizing: border-box;
`
export const OffClickWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: ${props => props.open ? 'block': 'none'};
`
export const ServicesHeader = styled.div`
    font-size: 24px;
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
`
export const ServicesHeaderWrapper = styled.div`
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
`
export const ServicesMenuWrapper = styled.div`

`
export const SubServicesWrapper = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    padding-left: 20px;
`
export const SubService = styled(Link)`
    font-size: 24px;
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
`