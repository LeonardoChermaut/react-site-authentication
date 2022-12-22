import React from "react";
import Navbar from "../../component/navbar/Navbar";
import {Title} from "../../component/tittle/Title";
import {GetImages} from "../../service/unsplash-api/GetImages";

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

