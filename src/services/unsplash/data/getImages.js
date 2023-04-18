import React, { useState, useEffect } from "react";
import { ImagesGalery, GaleryContainer } from "../../../pages/home/Styled";
import { unsplashApi } from "./index";

export const GetImages = () => {
  const [images, setImages] = useState([]);

  const fetchImageApi = async () => {
    try {
      const { data: images } = await unsplashApi.get();
      setImages(images);
    } catch (error) {
      console.error(error.message);
    }
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
