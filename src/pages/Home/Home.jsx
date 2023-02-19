import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Navbar, Title } from "../../components/imports/index";
import { GetImages } from "../../services/unsplash/index";

export const Home = () => (
  <Fragment>
    <Navbar />z
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
        <GetImages />
      </section>
    </Container>
  </Fragment>
);
