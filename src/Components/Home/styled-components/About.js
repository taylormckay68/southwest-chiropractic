import styled from 'styled-components';

export const AboutImage = styled.div`
    width: calc(100vw - 40px);
    height: calc(((100vw - 40px)*2)/3);
    background: ${props => props.picUrl ? `url(${props.picUrl}) 50%/cover no-repeat`: ''};
`
export const AboutText = styled.p`

`
export const AboutTextHeader = styled.h4`
    margin: 0;
`
export const AboutTextWrapper = styled.div`
    width: 100vw;
    padding: 0 20px;
    box-sizing: border-box;
    `
export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.backColor ? props.backColor : 'white'};
    border-top: 1px solid lightgray;
`
export const AboutBlockWrapper = styled.div`
    width: 100vw;
`
