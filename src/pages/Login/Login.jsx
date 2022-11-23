import { React, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Context from "../../context/index";
import { Navigate, useNavigate } from "react-router-dom";
import Title from "../../component/Title/Title";
import CustomButton from "../../component/Buttom/Buttom";
import { ContainerInput, CustomForm, FormLogin } from "./Styled";
import Register from "../Register/Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { signIn, signed } = useContext(Context);

  const validateForm = () => email.length > 0 && senha.length > 0;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email: email, senha: senha };
    signIn(user);
  };

  if (signed) {
    navigate("/home");
  } else {
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
              onUserPress={handleSubmit}
            >
              Login
            </CustomButton>
            <CustomButton mTop="1rem" onUserPress={Register} bColor="grey">
              Registrar
            </CustomButton>
          </FormLogin>
        </ContainerInput>
      </section>
    );
  }
};

export default Login;
