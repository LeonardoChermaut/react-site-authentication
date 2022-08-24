import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export const ContainerInput = styled(Container)`
  flex: 1;
  padding-bottom: 2rem;
  height: 450px;
  width: 40%;
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
  border: 1px solid #dbd3d3;
  -webkit-box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
`;

export const FormLogin = styled(Form)`
  font-size: 20px;
  width: 70%;
  left: 0;
  right: 0;
  margin: auto;
`;

export const CustomForm = styled(Form.Control)`
  margin-bottom: 0.5rem;
`;
