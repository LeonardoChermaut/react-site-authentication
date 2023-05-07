import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../api/host/index";
import { Title, Button } from "../../components/index";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";
import { FORM_SCHEMA } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(FORM_SCHEMA);
  const { signIn } = useContext(UserContext);

  const navigateToPage = (page) => navigate(page);

  const isValidEmailAndPassword = () => login.email.length > 0 && login.senha.length > 0;

  const verifyLoginAndRedirectUser = async (login) => {
    await signIn(login);
    navigateToPage("/home");
  };

  const handleSubmitFormLogin = (e) => {
    e.preventDefault();
    if (isValidEmailAndPassword()) {
      verifyLoginAndRedirectUser(login);
    }
  };

  const handleInputChange = (prop) => (event) => {
    const { value } = event.target;
    setLogin((prevState) => ({ ...prevState, [prop]: value }));
  };

  return (
    <ContainerInput>
      <Title fSize="30px" tAlign="center" mBottom="2rem" mTop="1rem">
        Faça seu login
      </Title>
      <FormLogin onSubmit={handleSubmitFormLogin}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <CustomForm
            autoFocus
            type="email"
            value={login.email}
            onChange={handleInputChange('email')}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={login.senha}
            autoComplete="on"
            onChange={handleInputChange('senha')}
          />
        </Form.Group>
        <Button
          mTop="2rem"
          type="submit"
          disabled={!isValidEmailAndPassword()}
          onUserPress={() => handleSubmitFormLogin}
        >
          login
        </Button>
        <Button
          mTop="1rem"
          bColor="grey"
          onUserPress={() => navigateToPage("/register")}
        >
          Registrar
        </Button>
      </FormLogin>
    </ContainerInput>
  );
};
