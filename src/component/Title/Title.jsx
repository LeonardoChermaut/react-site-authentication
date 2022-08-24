import React from "react";
import { CustomTitle } from "./Styled";

const Title = ({
  children,
  mTop,
  mLeft,
  mBottom,
  mRight,
  fSize,
  fColor,
  tAlign,
}) => {
  return (
    <CustomTitle
      mTop={mTop}
      mLeft={mLeft}
      mBottom={mBottom}
      mRight={mRight}
      fSize={fSize}
      fontColor={fColor}
      tAlign={tAlign}
    >
      {children}
    </CustomTitle>
  );
};

export default Title;
