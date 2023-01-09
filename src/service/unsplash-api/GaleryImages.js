import { React, useState, useEffect } from "react";
import { GaleryContainer, ImagesGalery } from "../../pages/home/Styled";
import { ImagesGalery, GaleryContainer } from "../../pages/home/Styled";
import { unsplashApi } from "./Api";

export const GaleryImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: images } = await unsplashApi.get();
      setImages(images);
    })();
  }, []);
  return (
    <GaleryContainer fluid>
      {images.map((img) => (
        <ImagesGalery key={img.id} src={img.urls.full} />
      ))}
    </GaleryContainer>
  );
};
