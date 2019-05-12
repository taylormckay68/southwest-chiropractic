import React from 'react';
import {LocationWrapper, LocationHeader, LocationText} from './styled-components/Location';

export default function Location() {
    return(
        <LocationWrapper className='location-wrapper'>
            <LocationHeader className='location-header'>LOCATION</LocationHeader>
            <LocationText className='location-text'>Southwest Chiropractic<br/>10358 S Redwood Rd<br/>South Jordan, UT 84095<br/>Phone: 801-254-9400</LocationText>
        </LocationWrapper>
    )
}