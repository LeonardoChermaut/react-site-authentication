import { React, useState, useEffect } from "react";
import { ImagesGalery, GaleryContainer } from "../../pages/Home/Styled";
import UNSPLASH_API from "./Api";

export default function GetImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {(async() => {
      const API = await UNSPLASH_API.get();
      let { data: images } = API;
      setImages(images);
    })();
  }, []);

  return (
    <GaleryContainer>
      {images.map(img => (<ImagesGalery key={img.id} src={img.urls.full} />))}
    </GaleryContainer>
  );
};

