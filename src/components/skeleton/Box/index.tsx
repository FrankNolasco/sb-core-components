import React from "react";
import { IBox } from "../../types";

export const Box: React.FC<IBox> = ({
  children,
  style,
  width,
  padding,
  margin,
  border,
  height,
  addShadow,
  ...restProps
}) => {
  return (
    <div
      style={{
        width,
        padding,
        margin,
        border,
        height,
        boxShadow: addShadow
          ? "0px 2px 16px 3px rgba(85,109,235,0.29)"
          : "none",
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
