import React from "react";
import { Navbar, Title } from "../../components/imports/index";
import { GetImages } from "../../services/unsplash/index";

export const Home = () => (
  <>
    <Navbar />
    <section>
      <Title tAlign="center" fSize="4rem">
        Recomendados para você.
      </Title>
      <GetImages />
    </section>
  </>
);
