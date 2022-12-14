import { React, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CustomButton from "../../component/Buttom/Buttom";
import Navbar from "../../component/navbar/Navbar";
import { GetUserByContext } from "../../service/localhost-api/GetUserByContext";
import { UpdateUser } from "../../service/localhost-api/UpdateUser";

export const Profile = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const mappedUser = (user) => {
    const { nome: name, email, sobrenome: lastname } = user;
    setUser(user);
    setName(name);
    setEmail(email);
    setLastName(lastname);
  };

  const update = () => {
    const request = {
      id: user.id,
      nome: name,
      email: email,
      sobrenome: lastName,
      senha: password,
    };
    UpdateUser(request);
  };

  GetUserByContext().then((user) => {
    mappedUser(user);
  });

  return (
    <>
      <Navbar />
      <Container fluid style={{ marginBottom: "3rem" }}>
        <Row>
          <Col className="col-md-3 border-right">
            <Col className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{user.nome}</span>
              <span className="text-black-50">{user.email}</span>
            </Col>
          </Col>
          <Col className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Configuração do perfil</h4>
              </div>

              <Col className="col-md-12">
                <label className="labels">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={name}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={lastName}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={email}
                />
              </Col>

              <Col className="col-md-12">
                <label className="labels">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="****"
                />
              </Col>
              <CustomButton
                type="submit"
                mTop="1.5rem"
                height="2.7rem"
                hover="darkgreen"
                onUserPress={() => update()}
              >
                Salvar
              </CustomButton>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
