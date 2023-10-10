import { IFlex } from "components/types";
import React from "react";

export const Flex: React.FC<IFlex> = ({ children, style, ...props }) => {
  const {
    justify,
    items,
    self,
    content,
    direction,
    wrap,
    gap,
    ...rest
  } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction ?? "row",
        justifyContent: justify ?? "flex-start",
        alignItems: items ?? "flex-start",
        alignContent: content ?? "flex-start",
        alignSelf: self ?? "flex-start",
        gap: gap,
        flexWrap: wrap ?? "inherit",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const Column: React.FC<IFlex> = ({
  children,
  direction = "column",
  ...props
}) => {
  return (
    <Flex direction={direction} {...props}>
      {children}
    </Flex>
  );
};

export const Row: React.FC<IFlex> = ({
  children,
  direction = "row",
  items,
  ...props
}) => {
  return (
    <Flex direction={direction} items={items ?? "center"} {...props}>
      {children}
    </Flex>
  );
};
