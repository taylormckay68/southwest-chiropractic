import React from 'react';
import {Days, DaysContainer, Hour, HoursContainer, HoursWrapper, HoursHeader, HoursContentWrapper} from './styled-components/Hours';
import {days, times} from '../../utils';

export default function Hours() {
    return(
        <HoursWrapper className='hours-wrapper'>
            <HoursHeader className='hours-header'>OFFICE HOURS</HoursHeader>
            <HoursContentWrapper className='hours-content-wrapper'>
                <DaysContainer className='days-container'>
                    {days.map((e, i) => {
                        return(
                            <Days className='days' key={i}>{e}</Days>
                        )
                    })}
                </DaysContainer>
                <HoursContainer className='hours-container'>
                    {times.map((e, i) => {
                        return(
                            <Hour className='hour' key={i}>{e}</Hour>
                        )
                    })}
                </HoursContainer>
            </HoursContentWrapper>
        </HoursWrapper>
    )
}