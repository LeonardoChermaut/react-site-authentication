import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const ImagesContainer = styled(Container)`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 20vh;
  align-items: stretch;
  justify-items: stretch;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Images = styled.img`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
`;
