import React from "react";
import AlertRequest from "../../component/Alert/AlertRequest";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";
import Context from "../../context/index";
import Title from "../../component/Title/Title";
import CustomButton from "../../component/Buttom/Buttom";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import LoginAlert from "../../component/Alert/LoginRequest";
import GetUserContex from "../../service/BaseApi/get-request";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const { signIn, signed } = React.useContext(Context);
  let navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && senha.length > 0;
  }

  function registerPage() {
    navigate("/register");
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = { email: email, senha: senha };

    signIn(data);
  }

  if (signed) {
    setTimeout(navigate("/home"), 2500);
    LoginAlert();
  } else
    return (
      <section>
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

            <Form.Group size="lg" controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                autoFocus
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Group>

            <CustomButton
              mTop="2rem"
              type="submit"
              disabled={!validateForm()}
              onUserPress={() => handleSubmit()}
            >
              Login
            </CustomButton>
            <CustomButton mTop="1rem" onUserPress={registerPage} bColor="grey">
              Registrar
            </CustomButton>
          </FormLogin>
        </ContainerInput>
      </section>
    );
}
