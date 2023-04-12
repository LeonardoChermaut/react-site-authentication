import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/localhost/index";
import { Title, Button } from "../../components/index";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signed, signIn } = useContext(UserContext);

  const validadeEmailAndPasswordForm = () => email.length > 0 && password.length > 0;
  const navigateToPage = (page) => navigate(page);

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    const user = { email: email, senha: password };
    verifyDataUserOrElseThrow(user);
  };

  const verifyDataUserOrElseThrow = (data) => {
    if (data.email && data.senha) signIn(data);
    try {
      if (signed) navigateToPage("/home");
      return;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <ContainerInput>
      <Title fSize="30px" tAlign="center" mBottom="2rem" mTop="1rem">
        Faça seu login
      </Title>
      <FormLogin onSubmit={handleSubmitLoginForm}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <CustomForm
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={password}
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          mTop="2rem"
          type="submit"
          disabled={!validadeEmailAndPasswordForm()}
          onUserPress={() => handleSubmitLoginForm}
        >
          login
        </Button>
        <Button mTop="1rem" bColor="grey" onUserPress={() => navigateToPage("/register")}>
          Registrar
        </Button>
      </FormLogin>
    </ContainerInput>
  );
};
