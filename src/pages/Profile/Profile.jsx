import React, { useMemo, useContext, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Navbar } from "../../components/index";
import { updateUser, UserContext } from "../../services/localhost/data/index";

export const Profile = () => {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  useMemo(() => {
    if (user) {
      const { id, ...rest } = user;
      setProfile({ id, ...rest });
    }
  }, [user]);

  const handleInputToUpdateProfile = async () => {
    setLoading(true);
    await updateUser(profile);
    setLoading(false);
  };

  const isLoading = (param) => (loading || !param ? "Carregando..." : param);

  const placeholder = {
    nome: isLoading(profile?.nome),
    email: isLoading(profile?.email),
    sobrenome: isLoading(profile?.sobrenome),
  };

  const handleInputChange = (prop) => (event) => {
    const { value } = event.target;
    setProfile((prevState) => ({ ...prevState, [prop]: value }));
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col className="col-md-3 border-right">
            <Col className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                alt="draw peaple"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{placeholder.nome}</span>
              <span className="text-black-50">{placeholder.email}</span>
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
                  placeholder={placeholder.nome}
                  onChange={handleInputChange("nome")}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={placeholder.sobrenome}
                  onChange={handleInputChange("sobrenome")}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={placeholder.email}
                  onChange={handleInputChange("email")}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  onChange={handleInputChange("senha")}
                />
              </Col>
              <Button
                type="submit"
                mTop="1.5rem"
                height="2.7rem"
                hover="darkgreen"
                onUserPress={() => handleInputToUpdateProfile()}
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
