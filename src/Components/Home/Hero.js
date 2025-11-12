import React from "react";
import {
  CallButton,
  HeroWrapper,
  HeroInfoWrapper,
  HeroTextWrapper,
  InfoLine,
  InfoLine2,
  CallButtonAnchor,
  ScheduleButton,
  ScheduleButtonAnchor,
} from "./styled-components/Hero";

export default function Hero() {
  return (
    <HeroWrapper className="hero-wrapper">
      <HeroInfoWrapper className="hero-info-wrapper">
        <HeroTextWrapper>
          <InfoLine>
            Southwest Chiropractic <br />
            JUST MOVED!
            <br /> Now <br />
            The Chiropractic Place
          </InfoLine>
          <InfoLine2>8777 S Redwood Rd Ste. 250, West Jordan, UT</InfoLine2>
        </HeroTextWrapper>
        <CallButtonAnchor href="tel:1-801-254-9400">
          <CallButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
            <span> 801-254-9400</span>
          </CallButton>
        </CallButtonAnchor>
        <ScheduleButtonAnchor
          href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ0juAbrrpcl7LmfyeNRCaNguB5tW1LYBAP65Cc="
          target="_blank"
          rel="noopener noreferrer"
        >
          <ScheduleButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
            </svg>
            <span>Schedule Appointment</span>
          </ScheduleButton>
        </ScheduleButtonAnchor>
      </HeroInfoWrapper>
    </HeroWrapper>
  );
}
