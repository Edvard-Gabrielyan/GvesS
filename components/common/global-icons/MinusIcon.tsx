import React, { FC, memo } from "react";
import { IPropsIcon } from "./types/type";

const MinusIcon: FC<IPropsIcon> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 2H0V0H14V2Z" fill={fill} />
    </svg>
  );
};

export default memo(MinusIcon);
