import { React, useState, useEffect } from "react";
import { Images, ImagesContainer } from "../../pages/Home/Styled";
import UNSPLASH_API from "./Api";

const getImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestApi = async () => await UNSPLASH_API.get().then(res => setImages(res.data));
    requestApi();
  }, []);

  return (
    <ImagesContainer>
      {images.map((img) => (
        <Images key={img.id} src={img.urls.full} />
      ))}
    </ImagesContainer>
  );
};
export default getImages;
