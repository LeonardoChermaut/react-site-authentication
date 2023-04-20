import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Title, Button } from "../../components/index";
import { registerUser } from "../../services/localhost/data";
import { ContainerInput, CustomForm, FormRegister } from "./Styled";
import { USER_REGISTER_SCHEMA } from "../utils/index";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(USER_REGISTER_SCHEMA);

  const navigateToPage = (page) => navigate(page);

  const isValidRegisterForm = () => {
    return (
      user.nome.length >= 3 &&
      user.sobrenome.length >= 4 &&
      user.email.length >= 15 &&
      user.senha.length >= 8
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const register = {
      ...USER_REGISTER_SCHEMA,
      nome: user.nome,
      sobrenome: user.sobrenome,
      email: user.email,
      senha: user.senha,
    };
    registerUser(register);
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
                onChange={(e) => setUser({ ...user, nome: e.target.value })}
              />

              <CustomForm
                placeholder="Sobrenome"
                autoComplete="on"
                onChange={(e) =>
                  setUser({ ...user, sobrenome: e.target.value })
                }
              />

              <CustomForm
                autoFocus
                type="email"
                value={user.email}
                autoComplete="on"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
              />
              <CustomForm
                placeholder="Senha"
                type="password"
                value={user.senha}
                autoComplete="on"
                onChange={(e) => setUser({ ...user, senha: e.target.value })}
              />
            </Col>
          </Row>
          <Button
            mTop="1rem"
            type="submit"
            onUserPress={handleSubmit}
            disabled={!isValidRegisterForm()}
          >
            Registrar
          </Button>
          <Button
            mTop="1rem"
            onUserPress={() => navigateToPage("/login")}
            bColor="grey"
          >
            Voltar
          </Button>
        </FormRegister>
      </ContainerInput>
    </section>
  );
};
