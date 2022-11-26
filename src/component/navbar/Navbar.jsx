import React from "react";
import Title from "../tittle/Title";
import UserContext from "../../context";
import CustomButton from "../buttom/Buttom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {  NavbarStyled, Link,SignOutButtom } from "./Styled";

const Navbar = () => {
  const navigate = useNavigate();
  const toHome = () => navigate("/home");
  const toProfile = () => navigate("/profile");
  const { signOut } = React.useContext(UserContext);

  return (
    <NavbarStyled expand="lg" sticky="top">
      <Link onClick={toHome}>Home</Link>
      <Link href="#">Sobre nós</Link>
      <SignOutButtom onClick={()=> signOut()}>Sair</SignOutButtom>
      <CustomButton width="50px" height="60px" mLeft="1rem" mRight="1rem" onUserPress={toProfile} >
        <svg width="30" height="35" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ marginLeft: "-0.2rem" }}>
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 
        0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 
        10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
        <Title fSize="10px" fColor="#fff">
          Perfil
        </Title>
      </CustomButton>

    </NavbarStyled>
  );
};

export default Navbar;
