import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export const ContainerInput = styled(Container)`
  flex: 1;
  left: 0;
  right: 0;
  top: 50%;
  width: 40%;
  height: 450px;
  margin: 0 auto;
  position: absolute;
  border-radius: 10px;
  padding-bottom: 2rem;
  border: 1px solid #dbd3d3;
  transform: translateY(-50%);
  box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
`;

export const FormLogin = styled(Form)`
  left: 0;
  right: 0;
  width: 70%;
  margin: auto;
  font-size: 20px;
`;

export const CustomForm = styled(Form.Control)`
  margin-bottom: 0.5rem;
`;
