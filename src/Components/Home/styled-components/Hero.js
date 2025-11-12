import styled from "styled-components";
const heroImg = require("../../../assets/slc-valley-min.jpg");
// const heroImg = '';

export const CallButton = styled.button`
  height: 40px;
  width: 200px;
  background: white;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;
  &:hover {
    background: #6488ca;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(100, 136, 202, 0.3);
  }
  @media (min-width: 550px) {
    width: 250px;
    font-size: 16px;
  }
`;

export const ScheduleButton = styled.button`
  height: 40px;
  width: 200px;
  background: #4caf50;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 550px) {
    width: 250px;
    font-size: 16px;
  }
`;

export const ScheduleButtonAnchor = styled.a`
  text-decoration: none;
`;
export const CallButtonAnchor = styled.a`
  text-decoration: none;
`;
export const HeroWrapper = styled.div`
  height: 500px;
  width: 100%;
  background: url(${heroImg ||
    "https://s3-us-west-1.amazonaws.com/southwest-chiro/images/slc-valley-min.jpg"})
    50% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroInfoWrapper = styled.div`
  height: auto;
  width: 275px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 25px 15px;
  border-radius: 8px;
  @media (min-width: 550px) {
    width: 400px;
    gap: 15px;
    padding: 30px 20px;
  }
  @media (min-width: 1100px) {
    width: 600px;
    gap: 20px;
    padding: 40px 30px;
  }
`;
export const HeroTextWrapper = styled.div``;
export const InfoLine = styled.h1`
  font-size: 24px;
  text-align: center;
  line-height: 1.2;
  color: white;
  margin: 0;
  @media (min-width: 550px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (min-width: 1100px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;
export const InfoLine2 = styled.h2`
  text-align: center;
  color: white;
  margin: 0;
  line-height: 1.2;
  font-size: 18px;
  @media (min-width: 550px) {
    font-size: 20px;
  }
  @media (min-width: 1100px) {
    font-size: 32px;
  }
`;
