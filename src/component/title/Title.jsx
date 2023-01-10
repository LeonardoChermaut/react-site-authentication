import React from "react";
import { CustomTitle } from "./Styled";

export const Title = ({
  children,
  mTop,
  mLeft,
  mBottom,
  mRight,
  fSize,
  fColor,
  tAlign,
}) => (
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

