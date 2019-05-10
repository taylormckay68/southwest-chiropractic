import styled from 'styled-components';

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
export const CloseWrapper = styled.div`
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    box-sizing: border-box;
`
export const CloseIcon = styled.div`
    height: 50px;
    width: 50px;
`