import { React, useState, useEffect } from "react";
import { Images, ImagesContainer } from "../../pages/Home/Styled";
import UNSPLASH_API from "./Api";

const GetImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () =>
      await UNSPLASH_API.get()
      .then(res => setImages(res.data)))
   ();
  }, []);

  return (
    <ImagesContainer>
      {images.map((img) => (
        <Images key={img.id} src={img.urls.full} />
      ))}
    </ImagesContainer>
  );
};
export default GetImages;
