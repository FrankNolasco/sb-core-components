import { Row } from "components/skeleton/Flex";
import { IButton } from "components/types";
import React from "react";
import style from "./button.module.css";
import { theme } from "Theme";

export const Button: React.FC<IButton> = ({
  variant,
  icon,
  children,
  ...rest
}) => {
  return (
    <button
      className={style[variant]}
      style={{
        borderRadius: "0.25em",
        padding: "0.5em 1em",
        cursor: "pointer",
        transition: "all 0.2s",
        backgroundColor: theme.buttons[variant].backgroundColor,
        color: theme.buttons[variant].text,
        border: theme.buttons[variant].border.default,
      }}
      {...rest}
    >
      <Row gap={icon ? "5px" : 0}>
        {typeof icon === "string" ? <i className={icon} /> : icon}
        {children}
      </Row>
    </button>
  );
};
