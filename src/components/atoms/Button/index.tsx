import { Row } from "components/skeleton/Flex";
import { IButton } from "components/types";
import React from "react";
import { ButtonStyled } from "./styled";
import { theme } from "Theme";
export const Button: React.FC<IButton> = ({ icon, children, type }) => {
  return (
    <ButtonStyled myTheme={theme} type={type}>
      <Row gap={icon ? "5px" : 0}>
        {typeof icon === "string" ? <i className={icon} /> : icon}
        {children}
      </Row>
    </ButtonStyled>
  );
};
