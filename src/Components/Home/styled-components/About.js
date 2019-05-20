import styled from 'styled-components';

export const AboutImage = styled.div`
    width: calc(100vw - 40px);
    height: calc(((100vw - 40px)*2)/3);
    background: ${props => props.picUrl ? `url(${props.picUrl}) 50%/cover no-repeat`: ''};
    max-width: 600px;
    max-height: 400px;
    @media (min-width: 900px){
        width: 50vw;
        height: calc(((50vw)*2)/3);
    }
`
export const AboutText = styled.p`
    margin: 0;
`
export const AboutTextHeader = styled.h4`
    font-size: 25px;
    margin: 15px 0;
`
export const AboutTextWrapper = styled.div`
    /* width: 100vw; */
    /* padding: 0 20px; */
    /* box-sizing: border-box; */
    max-width: 600px;
    @media (min-width: 900px) {
        width: 50vw;
        margin-left: 20px;
    }
`
export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.backColor ? props.backColor : 'white'};
    border-top: 1px solid lightgray;
    padding: 45px 20px;
    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: center;
    }
`
export const AboutBlockWrapper = styled.div`
    width: 100vw;
`
export const MeetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.backColor ? props.backColor : 'white'};
    border-top: 1px solid lightgray;
    padding: 45px 20px;
    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: center;
    }
`
export const MeetTextWrapper = styled.div`
    /* width: 100vw;
    padding: 0 20px;
    box-sizing: border-box; */
    max-width: 600px;
    @media (min-width: 900px) {
        width: 50vw;
        margin-right: 20px;
    }
`
export const MeetTextHeader = styled.h4`
    font-size: 25px;
    margin: 0;
`
export const MeetText = styled.p`
    margin: 15px 0;
`