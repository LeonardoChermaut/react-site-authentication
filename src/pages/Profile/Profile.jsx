import { React, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Navbar } from "../../components/imports/index";
import { updateUser, UserContext } from "../../services/localhost/index";

export const Profile = () => {
  const [userDataContext, setUserDataContext] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const contextToUser = async (context) => {
      const data = await context();
      const response = await data;
      try {
        if (response) {
          setUserDataContext(response);
          const mappedUser = userDataContext.map((user) => {
            console.log(user);
          });
          return mappedUser;
        }
      } catch (error) {
        console.error("error convert", error.message);
      }
    };
    contextToUser(UserContext);
  }, []);

  const update = (event) => {
    event.preventDefault();
    const request = {
      id: id,
      nome: name,
      email: email,
      sobrenome: lastName,
      senha: password,
    };
    updateUser(request);
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
              <span className="font-weight-bold">{userDataContext.nome}</span>
              <span className="text-black-50">{userDataContext.email}</span>
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
                  placeholder={userDataContext.nome}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={userDataContext.sobrenome}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={userDataContext.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Button
                type="submit"
                mTop="1.5rem"
                height="2.7rem"
                hover="darkgreen"
                onUserPress={() => update()}
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
