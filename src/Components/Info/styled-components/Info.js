import styled from 'styled-components'

export const InfoWrapper = styled.div`
    width: 100vw;
    box-sizing: border-box;
    padding: 45px 20px;
    border-top: 1px solid lightgray;
    @media (min-width: 700px) {
        display: flex;
        justify-content: center;
    }
`
export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    max-width: 1000px;
    justify-content: space-between;
    flex-wrap: wrap;
`