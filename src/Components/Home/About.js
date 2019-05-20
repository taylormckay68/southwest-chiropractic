import React from 'react';
import {AboutBlockWrapper, AboutImage, AboutText, AboutTextHeader, AboutTextWrapper, AboutWrapper, MeetWrapper, MeetTextWrapper, MeetTextHeader, MeetText} from './styled-components/About';
import {aboutText, meetText} from '../../utils';
// const famPic = require('../../assets/family-pic-low.jpg');
// const brad = require('../../assets/Brad.jpg');
// const debbie = require('../../assets/Debbie.jpg');
const famPic = '';
const brad = '';
const debbie = '';

export default function About() {
    return(
        <AboutBlockWrapper className='about-block-wrapper'>
            <AboutWrapper className='about-wrapper' backColor='#f7f7f7'>
                <AboutImage className='about-image' picUrl={famPic || 'https://s3-us-west-1.amazonaws.com/southwest-chiro/images/family-pic-low.jpg'}/>
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
                <AboutImage className='meet-image' picUrl={brad || 'https://s3-us-west-1.amazonaws.com/southwest-chiro/images/Brad.jpg'}/>
            </MeetWrapper><AboutWrapper className='about-debbie-wrapper' backColor='#f7f7f7'>
                <AboutImage className='about-debbie-image' picUrl={debbie || 'https://s3-us-west-1.amazonaws.com/southwest-chiro/images/Debbie.jpg'}/>
                <AboutTextWrapper className='about-debbie-text-wrapper'>
                    <AboutTextHeader className='about-debbie-text-header'>Meet Debbie</AboutTextHeader>
                    <AboutText>{aboutText}
                    </AboutText>
                </AboutTextWrapper>
            </AboutWrapper>

        </AboutBlockWrapper>
    )
}