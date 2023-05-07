import React, { useState, useEffect } from "react";
import { GaleryContainer, ImagesGalery } from "../../pages/home/Styled";
import { fetchImages } from "../../api/unsplash/index";
import { Title } from "../title";

const mappedImages = (images = []) =>
  images.map((img) => {
    const {
      id: key,
      urls: { small: src },
    } = img;

    return <ImagesGalery key={key} src={src} />;
  });

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

  if (isLoading) {
    return (
      <Title fSize="1.5rem" tAlign="center" mTop="5rem">
        Carregando imagens...
      </Title>
    );
  }
  return <GaleryContainer fluid>{mappedImages(images)}</GaleryContainer>;
};
