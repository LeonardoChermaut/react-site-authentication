import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const PrimaryButton = styled(Button)`
  height: ${(props) => props.heightsize || "50px"};
  width: ${(props) => props.widthsize || "100%"};
  align-self: ${(props) => props.aself || "center"};
  align-items: ${(props) => props.text || "center"};
  border-radius: ${(props) => props.bradius || "10px"};
  margin-top: ${(props) => props.margint || "0"};
  margin-left: ${(props) => props.marginl || "0"};
  margin-right: ${(props) => props.marginr || "0"};
  margin-bottom: ${(props) => props.marginb || "0"};
  background-color: ${(props) => props.buttoncolor || "#2d2c2b"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: ${(props) => props.marginB || "0px"};
  border-color: transparent;
  &:hover {
    background-color: ${(props) => props.hover || ""};
    border-color: transparent;
  }
`;
