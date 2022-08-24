import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const FooterStyled = styled(Navbar)`
  height: 4rem;
  justify-content: space-evenly;
  font-size: 18px;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;
