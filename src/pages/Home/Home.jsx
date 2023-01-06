import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "../../component/navbar/Navbar";
import Title from "../../component/tittle/Title";
import { GaleryImages } from "../../service/unsplash-api/GaleryImages";

export const Home = () => (
  <Fragment>
    <Navbar />
    <Container fluid>
      <section>
        <Title tAlign="center" fSize="2rem" mBottom="2rem" mTop="5rem">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Title>
        <Title tAlign="center" fSize="1.2rem" mBottom="1rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          voluptas, sunt, temporibus eaque sapiente voluptates nostrum sit
          <br></br>
          necessitatibus dicta quo minima facere perferendis corrupti magnam
          debitis, earum omnis! Animi, architecto.
        </Title>
        <GaleryImages />
      </section>
    </Container>
  </Fragment>
);
