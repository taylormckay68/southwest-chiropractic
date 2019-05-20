import React from 'react';
import {HomeServicesWrapper, OfferText, ServiceItemsContainer, ServiceItemWrapper, ServicesText, ServiceItemAnchor, ServiceItemText, ServiceItemsTempCont, ServiceItemTempWrapper} from './styled-components/HomeServices';
import {serviceData} from '../../utils';

export default function HomeServices() {
    return(
        <HomeServicesWrapper className='home-services-wrapper'>
            <OfferText className='offer-text'>WHAT WE OFFER</OfferText>
            <ServicesText className='services-text'>Services</ServicesText>
            {/* <ServiceItemsContainer className='service-items-container'>
                {serviceData.map((e,i) => {
                    return(
                        <ServiceItemWrapper className='service-item-wrapper' key={i}>
                            <ServiceItemAnchor className='service-item-anchor' to={`/services/${e.link}`}>
                                <ServiceItemText className='service-item-text'>{e.service}</ServiceItemText>
                            </ServiceItemAnchor>
                        </ServiceItemWrapper>
                    )
                })}
            </ServiceItemsContainer> */}
            <ServiceItemsTempCont>
                {serviceData.map((e, i) => {
                    return(
                        <ServiceItemTempWrapper key={i}>
                            • {e.service}
                        </ServiceItemTempWrapper>
                    )
                })}
            </ServiceItemsTempCont>
        </HomeServicesWrapper>
    )
}