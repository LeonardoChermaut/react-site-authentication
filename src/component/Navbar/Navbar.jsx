import React from "react";
import Container from "react-bootstrap/Container";
import {
  NavbarStyled,
  Link,
  Collapse,
  SignOutButtom,
  ColNav,
  Toggle,
} from "./Styled";
import CustomButton from "../Buttom/Buttom";
import GetUserContex from "../../service/BaseApi/get-request";
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";

function Navbar() {
  let navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem("token");
    document.location.reload(true);
    navigate("/login");
  }

  function handlePerfil() {
    navigate("/profile");
  }

  function handleHome() {
    navigate("/home");
  }
  GetUserContex();
  return (
    <NavbarStyled expand="lg" sticky="top">
      <Container fluid>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse>
          <ColNav>
            <Link onClick={() => handleHome()}>Home</Link>

            <Link href="#">Sobre nós</Link>
            <SignOutButtom onClick={() => handleSignOut()}>Sair</SignOutButtom>

            <CustomButton
              width="50px"
              height="60px"
              mLeft="1rem"
              onUserPress={() => handlePerfil()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="35"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
                style={{ marginLeft: "-0.2rem" }}
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <Title fSize="10px" fColor="#fff">
                Perfil
              </Title>
            </CustomButton>
          </ColNav>
        </Collapse>
      </Container>
    </NavbarStyled>
  );
}

export default Navbar;
