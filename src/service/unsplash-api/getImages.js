import { React, useState, useEffect } from "react";
import { ImagesGalery, GaleryContainer } from "../../pages/Home/Styled";
import UNSPLASH_API from "./Api";

export default function GetImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const api = await UNSPLASH_API.get();
      const { data: images } = api;
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
