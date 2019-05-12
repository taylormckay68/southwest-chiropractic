import React from 'react';
import {EmailContact, GetInTouchWrapper, GetInTouchHeader, CallButton, CallButtonAnchor} from './styled-components/GetInTouch';


export default function GetInTouch() {
    return(
        <GetInTouchWrapper>
            <GetInTouchHeader>GET IN TOUCH</GetInTouchHeader>
            <EmailContact href="mailto:bradnpetersondc@comcast.net">bradnpetersondc@comcast.net </EmailContact>
            <CallButtonAnchor href="tel:1-801-254-9400">
                <CallButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill='#6488ca'><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                    <span> 801-254-9400</span>
                </CallButton>
            </CallButtonAnchor>
        </GetInTouchWrapper>
    )
}