import { React, useContext, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Navbar } from "../../components/imports/index";
import { updateUser } from "../../services/localhost/index";
import { UserContext } from "../../services/localhost/index";

export const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user?.nome || "");
  const [email, setEmail] = useState(user?.email || "");
  const [lastName, setLastName] = useState(user?.sobrenome || "");
  const [password, setPassword] = useState(user?.senha || "");

  const handleUpdateButtonClick = async () => {
    const request = {
      id: user.id,
      nome: name,
      email: email,
      sobrenome: lastName,
      senha: password,
    };
    try {
      const { data } = await updateUser(request);
      setUser(data);
    } catch (error) {
      console.error(`error on update user `, error);
    }
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
                alt="draw peaple"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">
                {user?.nome || "Loading..."}
              </span>
              <span className="text-black-50">{user?.email}</span>
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
                  placeholder={user?.nome}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={user?.sobrenome}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={user?.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Button
                type="submit"
                mTop="1.5rem"
                height="2.7rem"
                hover="darkgreen"
                onUserPress={handleUpdateButtonClick}
              >
                Salvar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
