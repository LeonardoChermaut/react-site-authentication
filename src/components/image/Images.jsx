import React, { useState, useEffect } from "react";
import { GaleryContainer, ImagesGalery } from "../../pages/home/Styled";
import { fetchImages } from "../../services/unsplash/data";
import { Title } from "../title";

export const Images = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const { images } = await fetchImages();
    setImages(images);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  if (isLoading) return <Title fSize="1.5rem" tAlign="center" mTop="5rem">Carregando imagens...</Title>;

  return (
    <GaleryContainer fluid>
      {images.map((img) => (
        <ImagesGalery key={img.id} src={img.urls.small} />
      ))}
    </GaleryContainer>
  );
};
