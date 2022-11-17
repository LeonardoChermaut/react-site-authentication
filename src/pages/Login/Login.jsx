import React from "react";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";
import Context from "../../context/index";
import Title from "../../component/Title/Title";
import CustomButton from "../../component/Buttom/Buttom";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import LoginAlert from "../../component/Alert/LoginRequest";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const { signIn, signed } = React.useContext(Context);

  const registerPage = () => navigate("/register");
  const validateForm = () => email.length > 0 && senha.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email, senha: senha };
    signIn(data);
  };

  if (signed) {
    navigate("/home");
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
};

export default Login;
