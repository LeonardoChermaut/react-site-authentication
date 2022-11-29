import { React, useState , useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import CustomButton from "../../component/buttom/Buttom";
import Navbar from "../../component/navbar/Navbar";
import getUser from "../../service/localhost-api/getUserByContex";

const UserPerfil = () => {
  const [user, setUser] = useState([]);
  getUser().then(user => setUser(user));

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
                  placeholder={user.nome}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={user.sobrenome}
                />
              </Col>

              <Col className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={user.email}
                />
              </Col>

              <div className="col-md-12">
                <label className="labels">Senha</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="************"
                />
              </div>
              <CustomButton mTop="2rem"> Salvar </CustomButton>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPerfil;
