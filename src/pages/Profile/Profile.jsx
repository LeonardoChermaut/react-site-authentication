import { React, useCallback, useContext, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Navbar } from "../../components/index";
import { updateUser, UserContext } from "../../services/localhost/data/index";
import { PROFILE_SCHEMA } from "../utils/index";

export const Profile = () => {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState(PROFILE_SCHEMA);

  const getUserContext = useCallback((user) => {
    let loading = 'Carregando...'
    const profile = {
      ...PROFILE_SCHEMA,
      id: user?.id || loading,
      nome: user?.nome || loading,
      email: user?.email || loading,
      sobrenome: user?.sobrenome || loading,
      senha: user?.senha || loading,
    };
    setProfile(profile);
  }, []);

  const handleInputToUpdateProfile = () => {
    const updatedProfile = {
      ...PROFILE_SCHEMA,
      id: profile.id,
      nome: profile?.nome || profile.nome,
      email: profile?.email || profile.email,
      sobrenome: profile?.sobrenome || profile.sobrenome,
      senha: profile?.senha || profile.senha,
    };
    console.log(updatedProfile);
    updateUser(updatedProfile);
  };

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  }, []);

  useEffect(() => {
    getUserContext(user);
  }, [user, getUserContext]);

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
              <span className="font-weight-bold">{`${profile.nome}`}</span>
              <span className="text-black-50">{`${profile.email}`}</span>
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
                  placeholder={`${profile.nome}`}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={`${profile.sobrenome}`}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={`${profile.email}`}
                  onChange={(e) => handleInputChange(e)}
                />
              </Col>
              <Col className="col-md-12">
                <label className="labels">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  onChange={(e) => handleInputChange(e)}
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
