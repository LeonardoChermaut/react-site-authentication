import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const GaleryContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export const ImagesGalery = styled.img`
  width: 25%;
  flex: 1;
  margin: 1rem;
  border-radius: 0.8rem;
  transition: transform 0.2s;
  -webkit-box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);

  &:hover {
    ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.08);
  }
`;
