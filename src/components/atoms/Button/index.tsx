import { Row } from "components/skeleton/Flex";
import { IButton } from "components/types";
import React from "react";
import style from "./button.module.css";
import { theme } from "Theme";
export const Button: React.FC<IButton> = ({ icon, children, type }) => {
  return (
    <button
      className={style[type]}
      style={{
        borderRadius: "0.25em",
        padding: "0.5em 1em",
        cursor: "pointer",
        transition: "all 0.2s",
        backgroundColor: theme.buttons[type].backgroundColor,
        color: theme.buttons[type].text,
        border: theme.buttons[type].border.default,
      }}
    >
      <Row gap={icon ? "5px" : 0}>
        {typeof icon === "string" ? <i className={icon} /> : icon}
        {children}
      </Row>
    </button>
  );
};
