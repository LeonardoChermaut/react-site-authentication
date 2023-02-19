import React, { useState, useEffect } from "react";
import { ImagesGalery, GaleryContainer } from "../../pages/home/Styled";
import { fetchImagesApi } from "./index";

export const GetImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: images } = await fetchImagesApi.get();
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
