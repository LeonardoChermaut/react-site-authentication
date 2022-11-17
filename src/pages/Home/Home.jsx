import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Title from "../../component/Title/Title";
import GetImages from "../../service/ImagesApi/get-request";

const Home = () => (
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

export default Home;
