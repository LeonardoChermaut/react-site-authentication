import React from "react";
import { Images, ImagesContainer } from "../../pages/Home/Styled";
import API_UNSPLASH from "./Api";

const GetImages = () => {
  const [image, setImage] = React.useState([]);

  React.useEffect(() => {
    let images = async () => {
      await API_UNSPLASH.get().then((res) => {
        setImage(res.data);
      });
    };
    images();
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
