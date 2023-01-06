import React from "react";
import { CustomButton } from "./Styled";

export const Button = ({
  children,
  onUserPress,
  width,
  mTop,
  mLeft,
  mBottom,
  mRight,
  tAlign,
  bColor,
  height,
  border,
  aSelf,
  type,
  disabled,
  hover,
}) => (
  <CustomButton
    hover={hover}
    aself={aSelf}
    text={tAlign}
    margint={mTop}
    marginb={mBottom}
    marginr={mRight}
    marginl={mLeft}
    bradius={border}
    widthsize={width}
    heightsize={height}
    buttoncolor={bColor}
    onClick={onUserPress}
    type={type}
    disabled={disabled}
  >
    {children}
  </CustomButton>
);
