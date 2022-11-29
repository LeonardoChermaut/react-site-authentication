import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Title from "../../component/tittle/Title";
import CustomButton from "../../component/Buttom/Buttom";
import { RegisterUser } from "../../service/localhost-api/createUser";
import { ContainerInput, CustomForm, FormRegister } from "./Styled";

const Register = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const returnLogin = () => navigate("/login");

  const validateForm = () =>
    nome.length > 2 &&
    sobrenome.length > 4 &&
    email.length > 10 &&
    senha.length > 7;

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
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
                onChange={(e) => setNome(e.target.value)}
              />

              <CustomForm
                placeholder="Sobrenome"
                autoComplete="on"
                onChange={(e) => setSobrenome(e.target.value)}
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
                value={senha}
                autoComplete="on"
                onChange={(e) => setSenha(e.target.value)}
              />
            </Col>
          </Row>
          <CustomButton
            mTop="1rem"
            type="submit"
            onUserPress={handleSubmit}
            disabled={!validateForm()}
          >
            Registrar
          </CustomButton>
          <CustomButton mTop="1rem" onUserPress={returnLogin} bColor="grey">
            Voltar
          </CustomButton>
        </FormRegister>
      </ContainerInput>
    </section>
  );
};

export default Register;
