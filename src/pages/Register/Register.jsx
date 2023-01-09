import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Title from "../../component/tittle/Title";
import { Button } from "../../component/button/Button";
import { Title } from "../../component/tittle/Title";
import { Button } from "../../component/button/Button";
import { RegisterUser } from "../../service/localhost-api/RegisterUser";
import { ContainerInput, CustomForm, FormRegister } from "./Styled";

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");

  const returnLogin = () => navigate("/login");

  const validateForm = () =>
    name.length > 2 &&
    lastName.length > 4 &&
    email.length > 10 &&
    password.length > 7;

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      nome: name,
      sobrenome: lastName,
      email: email,
      senha: password,
    };
    RegisterUser(user);
  };

  return (
    <section>
      <ContainerInput>
        <Title fSize="30px" tAlign="center" mBottom="1rem">
          Registro
        </Title>
        <Title fSize="15px" tAlign="center" mBottom="1rem">
          Preencha com informações válidas para avançar no cadastro.
        </Title>
        <FormRegister onSubmit={handleSubmit}>
          <Row>
            <Col>
              <CustomForm
                placeholder="Nome"
                autoComplete="on"
                onChange={(e) => setName(e.target.value)}
              />

              <CustomForm
                placeholder="Sobrenome"
                autoComplete="on"
                onChange={(e) => setLastName(e.target.value)}
              />

              <CustomForm
                autoFocus
                type="email"
                value={email}
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <CustomForm
                placeholder="Senha"
                type="password"
                value={password}
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Button
            mTop="1rem"
            type="submit"
            onUserPress={handleSubmit}
            disabled={!validateForm()}
          >
            Registrar
          </Button>
          <Button mTop="1rem" onUserPress={returnLogin} bColor="grey">
            Voltar
          </Button>
        </FormRegister>
      </ContainerInput>
    </section>
  );
};
