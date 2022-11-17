import React, { useState } from "react";
import { ContainerInput, CustomForm, FormRegister } from "./Styled";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "../../component/Title/Title";
import CustomButton from "../../component/Buttom/Buttom";
import register from "../../service/BaseApi/post-request";

const Register = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const validateForm = () =>
    nome.length > 2 &&
    sobrenome.length > 4 &&
    email.length > 10 &&
    senha.length > 7;

  const returnLogin = () => navigate("/login");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
    };
    register(user);
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
