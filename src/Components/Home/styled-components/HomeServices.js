import styled from "styled-components";
import { Link } from "react-router-dom";
import { yellow } from "ansi-colors";

export const HomeServicesWrapper = styled.div`
  padding: 60px 20px;
  background: linear-gradient(to bottom, #ffffff 0%, #f9f9f9 100%);
`;
export const OfferText = styled.h4`
  text-align: center;
  color: #6488ca;
  margin: 0;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 14px;
`;
export const ServiceItemAnchor = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
`;
export const ServiceItemText = styled.p``;
export const ServiceItemWrapper = styled.div`
  width: calc((100vw - 42px) / 2);
  height: calc((100vw - 42px) / 2);
  background: gray;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const ServiceItemsContainer = styled.div`
  width: calc(100vw - 40px);
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ServicesText = styled.h3`
  text-align: center;
  font-size: 40px;
  margin: 10px 0 30px 0;
  color: #333;
`;
export const ServiceItemsTempCont = styled.div`
  width: 250px;
  margin: 10px auto 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    width: 550px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 1000px) {
    width: 800px;
  }
`;
export const ServiceItemTempWrapper = styled.div`
  height: 35px;
  font-size: 18px;
  line-height: 30px;
  width: 250px;
  color: #555;
  transition: all 0.2s ease;
  &:hover {
    color: #6488ca;
    transform: translateX(5px);
  }
  @media (min-width: 600px) {
    font-size: 20px;
  }
  @media (min-width: 1000px) {
    width: 270px;
    font-size: 22px;
  }
`;
