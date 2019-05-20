import React from 'react';
import {InfoWrapper, InfoContainer} from './styled-components/Info';
import Location from './Location';
import Hours from './Hours';
import GetInTouch from './GetInTouch';

export default function Info() {
    return(
        <InfoWrapper className='info-wrapper'>
            <InfoContainer>
                <Location/>
                <Hours/>
                <GetInTouch/>
            </InfoContainer>
        </InfoWrapper>
    )
}