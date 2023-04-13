import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/localhost/index";
import { Title, Button } from "../../components/index";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";

const FORM_SCHEMA = {
  email: "",
  password: "",
};

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(FORM_SCHEMA);
  const { signed, signIn } = useContext(UserContext);

  const isValidEmailAndPassword = () => login.email.length > 0 && login.password.length > 0;
  const navigateTo = (page) => navigate(page);

  const handleSubmitFormLogin = (e) => {
    e.preventDefault();
    if (isValidEmailAndPassword()) {
      signIn(login);
      try {
        if (signed) navigateTo("/home");
      } catch (error) {
        throw new Error(error);
      }
    }
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
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={login.password}
            autoComplete="on"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
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
          onUserPress={() => navigateTo("/register")}
        >
          Registrar
        </Button>
      </FormLogin>
    </ContainerInput>
  );
};
