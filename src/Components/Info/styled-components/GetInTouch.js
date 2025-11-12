import styled from "styled-components";

export const GetInTouchWrapper = styled.div`
  margin-top: 45px;
  @media (min-width: 700px) {
    margin-top: 0;
  }
`;
export const GetInTouchHeader = styled.p`
  color: #6488ca;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
`;
export const EmailContact = styled.a`
  text-decoration: none;
  color: #333;
  margin-top: 20px;
  font-size: 16px;
  transition: color 0.3s ease;
  &:hover {
    color: #6488ca;
  }
`;
export const CallButton = styled.button`
  height: 40px;
  width: 200px;
  background: white;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #6488ca;
  color: #6488ca;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #6488ca;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(100, 136, 202, 0.3);
  }
`;
export const CallButtonAnchor = styled.a`
  text-decoration: none;
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
  margin-top: 20px;
  transition: all 0.3s ease;
  &:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
  }
`;

export const ScheduleButtonAnchor = styled.a`
  text-decoration: none;
`;
