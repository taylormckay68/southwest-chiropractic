import React from 'react';
import {AboutBlockWrapper, AboutImage, AboutText, AboutTextHeader, AboutTextWrapper, AboutWrapper} from './styled-components/About';
import {aboutText, meetText} from '../../utils';
const famPic = require('../../assets//family-pic-low.jpg');

export default function About() {
    return(
        <AboutBlockWrapper className='about-block-wrapper'>
            <AboutWrapper className='about-wrapper' backColor='#f7f7f7'>
                <AboutImage className='about-image' picUrl={famPic}/>
                <AboutTextWrapper className='about-text-wrapper'>
                    <AboutTextHeader>About Southwest Chiropractic</AboutTextHeader>
                    <AboutText>{aboutText}
                    </AboutText>
                </AboutTextWrapper>
            </AboutWrapper>
            <AboutWrapper className='meet-wrapper' backColor="white">
                <AboutTextWrapper className='meet-text-wrapper'>
                    <AboutTextHeader>Meet Dr. Peterson</AboutTextHeader>
                    <AboutText>{meetText}
                    </AboutText>
                </AboutTextWrapper>
                <AboutImage className='meet-image' picUrl={famPic}/>
            </AboutWrapper>
        </AboutBlockWrapper>
    )
}