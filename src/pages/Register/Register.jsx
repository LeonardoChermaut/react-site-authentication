import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Title, Button } from "../../components/index";
import { registerUser } from "../../services/localhost/index";
import { ContainerInput, CustomForm, FormRegister } from "./Styled";

let USER_REGISTER_SCHEMA = {
  name: "",
  lastName: "",
  email: "",
  password: ""
}

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(USER_REGISTER_SCHEMA);
  
  const returnLogin = () => navigate("/login");

  const validateForm = () =>
    user.name.length >= 3 &&
    user.lastName.length >= 4 &&
    user.email.length >= 15 &&
    user.password.length >= 8;

  const handleSubmit = (event) => {
    event.preventDefault();
    USER_REGISTER_SCHEMA = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      senha: user.password,
    };
    registerUser(USER_REGISTER_SCHEMA);
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
                onChange={(e) => setUser({...user, name: e.target.value})}
              />

              <CustomForm
                placeholder="Sobrenome"
                autoComplete="on"
                onChange={(e) => setUser({...user, lastName: e.target.value})}
              />

              <CustomForm
                autoFocus
                type="email"
                value={user.email}
                autoComplete="on"
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Email"
              />
              <CustomForm
                placeholder="Senha"
                type="password"
                value={user.password}
                autoComplete="on"
                onChange={(e) => setUser({...user, password: e.target.value})}
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
