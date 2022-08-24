import styled from "styled-components";

export const CustomTitle = styled.p`
  margin-top: ${(props) => props.mTop || "0px"};
  margin-left: ${(props) => props.mLeft || "0px"};
  margin-right: ${(props) => props.mRight || "0px"};
  margin-bottom: ${(props) => props.mBottom || "0px"};
  font-size: ${(props) => props.fSize || "0px"};
  color: ${(props) => props.fontColor || "#000"};
  text-align: ${(props) => props.tAlign || "right"};
`;
