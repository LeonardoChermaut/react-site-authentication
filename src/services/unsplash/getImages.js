import React, { useState, useEffect } from "react";
import { ImagesGalery, GaleryContainer } from "../../pages/Home/Styled";
import { unsplashApi } from "./index";

export const GetImages = () => {
  const [images, setImages] = useState([]);

  const fetchImageApi = async () => {
    const { data: images } = await unsplashApi.get();
    setImages(images);
  };

  useEffect(() => {
    fetchImageApi();
  }, []);

  return (
    <GaleryContainer fluid>
      {images.map((img) => (
        <ImagesGalery key={img.id} src={img.urls.full} />
      ))}
    </GaleryContainer>
  );
};
