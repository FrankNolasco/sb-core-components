import { Row } from "components/skeleton/Flex";
import { IButton } from "components/types";
import React from "react";
import { ButtonStyled } from "./styled";
const Button: React.FC<IButton> = ({ icon, children, type }) => {
  return (
    <ButtonStyled type={type}>
      <Row gap={icon ? "5px" : 0}>
        {typeof icon === "string" ? <i className={icon} /> : icon}
        {children}
      </Row>
    </ButtonStyled>
  );
};

export default Button;
