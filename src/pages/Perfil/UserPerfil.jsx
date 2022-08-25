import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navbar from "../../component/Navbar/Navbar";
import GetObject from "../../service/BaseApi/get-request";

const UserPerfil = () => {
  const [user, setUser] = React.useState([]);

  GetObject();
  console.log(GetObject);

  console.log(user);
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col className="col-md-3 border-right">
            <Col className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Nome Usuário</span>
              <span className="text-black-50">email@usuario.com.br</span>
              <span> </span>
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
                  placeholder="Nome"
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="sobrenome"
                />
              </Col>

              <Col className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </Col>

              <div className="col-md-12">
                <label className="labels">Senha</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="senha"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Salvar
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPerfil;
