import { React, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Context from "../../context/index";
import { useNavigate } from "react-router-dom";
import Title from "../../component/Title/Title";
import CustomButton from "../../component/Buttom/Buttom";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { signIn } = useContext(Context);
  const navigate = useNavigate();

  const homePage = () => navigate("/home");
  const registerPage = () => navigate("/register");
  const validateForm = () => email.length > 0 && senha.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email, senha: senha };
    signIn(data);
  };
  return (
    <section>
      <ContainerInput>
        <Title fSize="30px" tAlign="center" mBottom="2rem" mTop="1rem">
          Faça seu login
        </Title>
        <FormLogin onSubmit={() => handleSubmit()}>
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
            onUserPress={(() => handleSubmit(), homePage())}
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
