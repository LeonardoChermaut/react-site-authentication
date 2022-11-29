import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export const ContainerInput = styled(Container)`
left: 0;
right: 0;
top: 20%;
height: 0;
position: absolute;
align-items: center;
border-radius: 0.5rem;
align-content: center;
flex-direction: column;
justify-content: center;
box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
-webkit-box-shadow: 0px 0px 47px -3px rgba(0, 0, 0, 0.35);
`;

export const FormLogin = styled(Form)`
  width: 50%;
  padding: 1rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const CustomForm = styled(Form.Control)`
  margin-bottom: 0.3rem;
`;


