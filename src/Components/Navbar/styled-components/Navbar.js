import styled from "styled-components";
import { Link } from "react-router-dom";

export const ChiroLogo = styled.img`
  height: 50px;
  width: 50px;
`;
export const HamMenu = styled.div`
  width: 50px;
  height: 50px;
  @media (min-width: 650px) {
    display: none;
  }
`;
export const LogoLink = styled(Link)`
  display: flex;
`;
export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  @media (min-width: 700px) {
    padding: 10px 24px;
  }
`;
export const BusinessName = styled.h1`
  font-size: 24px;
  color: gray;
  display: block;
  margin-left: 10px;
  /* @media (min-width: 650px) {
        display: block;
    } */
`;
