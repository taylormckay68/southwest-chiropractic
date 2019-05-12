import React from 'react';
import {InfoWrapper} from './styled-components/Info';
import Location from './Location';
import Hours from './Hours';
import GetInTouch from './GetInTouch';

export default function Info() {
    return(
        <InfoWrapper className='info-wrapper'>
            <Location/>
            <Hours/>
            <GetInTouch/>
        </InfoWrapper>
    )
}