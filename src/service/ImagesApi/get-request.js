import { React, useState, useEffect } from "react";
import { Images, ImagesContainer } from "../../pages/Home/Styled";
import API_UNSPLASH from "./Api";

const GetImages = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const request = async () =>
      await API_UNSPLASH.get().then((response) => {
        setImage(response.data);
      });
    request();
  }, []);

  return (
    <ImagesContainer>
      {image.map((image) => (
        <Images key={image.id} src={image.urls.full} />
      ))}
    </ImagesContainer>
  );
};
export default GetImages;
