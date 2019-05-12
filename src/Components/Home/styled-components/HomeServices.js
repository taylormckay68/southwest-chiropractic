import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeServicesWrapper = styled.div`
    padding: 45px 0;
`
export const OfferText = styled.h4`
    text-align: center;
    color: gray;
    margin: 0;
`
export const ServiceItemAnchor = styled(Link)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
`
export const ServiceItemText = styled.p`

`
export const ServiceItemWrapper = styled.div`
    width: calc((100vw - 42px)/2);
    height: calc((100vw - 42px)/2);
    background: gray;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`
export const ServiceItemsContainer = styled.div`
    width: calc(100vw - 40px);
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const ServicesText = styled.h3`
    text-align: center;
    font-size: 40px;
    margin: 0;
`