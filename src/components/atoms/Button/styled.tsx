import { IButton } from "components/types";
import styled from "styled-components";

export const ButtonStyled: React.FC<IButton> = styled.button<IButton>`
  border-radius: 0.25em;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: all 0.2s;
  ${({ myTheme, type }) =>
    myTheme &&
    `
    background-color: ${myTheme.buttons[type].backgroundColor};
    color: ${myTheme.buttons[type].text};
    border: ${myTheme.buttons[type].border.default};
    &:hover {
      border: ${myTheme.buttons[type].border.hover};
      box-shadow: 0px 0px 1px 1px ${myTheme.buttons[type].border.shadowColor};
    }
  `}
`;
