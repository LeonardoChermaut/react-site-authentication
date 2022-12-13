import { React, useState } from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import CustomButton from "../../component/Buttom/Buttom";
import Navbar from "../../component/navbar/Navbar";
import { GetUserByContext } from "../../service/localhost-api/GetUserByContext";
import { UpdateUser } from "../../service/localhost-api/UpdateUser";

const UserPerfil = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);

  GetUserByContext().then((user) => {
    mappedUser(user);
  });

  const mappedUser = (user) => {
    const { nome: name, email, sobrenome: lastname } = user;
    setUser(user);
    setName(name);
    setEmail(email);
    setLastName(lastname);
  };

  const update = async () => {
    const request = {
      id: user.id,
      nome: name,
      email: email,
      sobrenome: lastName,
      senha: password,
    };
    UpdateUser(request);
  };

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
                  placeholder={name}
                  disabled
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={lastName}
                  disabled
                />
              </Col>

              <Col className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={email}
                  disabled
                />
              </Col>

              <div className="col-md-12">
                <label className="labels">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="****"
                  disabled
                />
              </div>
              <Modal show={show} onHide={() => handleHide()}>
                <Modal.Header>
                  <Modal.Title>Editar informações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <label className="labels">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    value={`${name}`}
                  />
                  <label className="labels">Sobrenome</label>
                  <input
                    type="text"
                    className="form-control"
                    value={`${lastName}`}
                  />
                  <label className="labels">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={`${email}`}
                  />
                  <label className="labels">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="******"
                  />
                </Modal.Body>
                <Modal.Footer>
                  <CustomButton
                    onUserPress={() => update()}
                    bColor="black"
                    height="2.7rem"
                    hover="#0a3c01"
                  >
                    Salvar
                  </CustomButton>
                  <CustomButton
                    onUserPress={() => handleHide()}
                    mTop="0.5rem"
                    bColor="black"
                    hover="darkred"
                    height="2.7rem"
                  >
                    Cancelar
                  </CustomButton>
                </Modal.Footer>
              </Modal>
              <CustomButton
                onUserPress={() => handleShow()}
                mTop="1.5rem"
                height="2.7rem"
              >
                Editar
              </CustomButton>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPerfil;
