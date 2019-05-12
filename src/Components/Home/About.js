import React from 'react';
import {AboutBlockWrapper, AboutImage, AboutText, AboutTextHeader, AboutTextWrapper, AboutWrapper, MeetWrapper, MeetTextWrapper, MeetTextHeader, MeetText} from './styled-components/About';
import {aboutText, meetText} from '../../utils';
const famPic = require('../../assets//family-pic-low.jpg');

export default function About() {
    return(
        <AboutBlockWrapper className='about-block-wrapper'>
            <AboutWrapper className='about-wrapper' backColor='#f7f7f7'>
                <AboutImage className='about-image' picUrl={famPic}/>
                <AboutTextWrapper className='about-text-wrapper'>
                    <AboutTextHeader className='about-text-header'>About Southwest Chiropractic</AboutTextHeader>
                    <AboutText>{aboutText}
                    </AboutText>
                </AboutTextWrapper>
            </AboutWrapper>
            <MeetWrapper className='meet-wrapper' backColor="white">
                <MeetTextWrapper className='meet-text-wrapper'>
                    <MeetTextHeader className='meet-text-header'>Meet Dr. Peterson</MeetTextHeader>
                    <MeetText>{meetText}
                    </MeetText>
                </MeetTextWrapper>
                <AboutImage className='meet-image' picUrl={famPic}/>
            </MeetWrapper>
        </AboutBlockWrapper>
    )
}