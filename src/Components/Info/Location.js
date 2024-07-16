import React from 'react';
import {LocationWrapper, LocationHeader, LocationText} from './styled-components/Location';

export default function Location() {
    return(
        <LocationWrapper className='location-wrapper'>
            <LocationHeader className='location-header'>LOCATION</LocationHeader>
            <LocationText className='location-text'>Southwest Chiropractic<br/>8777 S Redwood Rd Suite 250<br/>West Jordan, UT 84088<br/>Phone: 801-254-9400</LocationText>
        </LocationWrapper>
    )
}