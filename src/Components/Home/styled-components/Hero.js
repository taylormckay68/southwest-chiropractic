import styled from 'styled-components';
const heroImg = require('../../../assets/slc-valley-min.jpg')

export const CallButton = styled.button`
    height: 40px;
    width: 200px;
    background: white;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CallButtonAnchor = styled.a`
    text-decoration: none;
`
export const HeroWrapper = styled.div`
    height: 500px;
    width: 100vw;
    background: url(${heroImg}) 50%/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeroInfoWrapper = styled.div`
    height: 275px;
    width: 275px;
    background: rgba(0,0,0, .3);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const HeroTextWrapper = styled.div`

`
export const InfoLine = styled.h1`
    font-size: 40px;
    text-align: center;
    line-height: 40px;
    color: white;
    margin: 0;
    
`
export const InfoLine2 = styled.h2`
    text-align: center;
    color: white;
    margin: 0;
`