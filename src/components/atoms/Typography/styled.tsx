import { ITypography } from "components/types";
import styled from "styled-components";

export const TypographyStyled = styled.span<ITypography>`
  color: ${(props) => props.color ?? "inherit"};
  font-weight: ${(props) => props.fw ?? "normal"};
  font-size: ${(props) =>
    props.myTheme
      ? `${
          props.myTheme.fonts.sizes[props.variant ?? "span"][props.size ?? "md"]
        }px;`
      : "12px;"}
  text-align: ${(props) => (props.center ? "center" : "inherit")};
  font-family: ${(props) =>
    props.myTheme ? props.myTheme.fonts.fontFamily : ""};
  margin: 0;
  padding: 0;
`;
