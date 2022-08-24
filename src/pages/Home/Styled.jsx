import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const ImagesContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  align-items: stretch;
  justify-items: stretch;
  margin-bottom: 20vh;
`;

export const Images = styled.img`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
`;
