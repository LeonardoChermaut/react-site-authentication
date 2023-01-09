import { React, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Context from "../../context/context";
import { useNavigate } from "react-router-dom";
import { Button } from "../../component/button/Button";
import { Title } from "../../component/tittle/Title";
import { Button } from "../../component/button/Button";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signed, signIn } = useContext(Context);

  const validateForm = () => email.length > 0 && password.length > 0;
  const registerPage = () => navigate("/register");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email: email, senha: password };
    signIn(user);
    if (signed) {
      navigate("/home");
    }
  };

  return (
    <ContainerInput>
      <Title fSize="30px" tAlign="center" mBottom="2rem" mTop="1rem">
        Faça seu login
      </Title>
      <FormLogin onSubmit={handleSubmit}>
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
          disabled={!validateForm()}
          onUserPress={handleSubmit}
        >
          login
        </Button>
        <Button mTop="1rem" bColor="grey" onUserPress={registerPage}>
          Registrar
        </Button>
      </FormLogin>
    </ContainerInput>
  );
};
