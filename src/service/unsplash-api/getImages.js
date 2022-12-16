import { React, useState, useEffect } from "react";
import { ImagesGalery, GaleryContainer } from "../../pages/Home/Styled";
import {unsplashApi} from "./Api";

export const GetImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const{ data: images } = await unsplashApi.get();
      setImages(images);
    })();
  }, []);

  return (
    <GaleryContainer>
      {images.map((img) => (
        <ImagesGalery key={img.id} src={img.urls.full} />
      ))}
    </GaleryContainer>
  );
}
