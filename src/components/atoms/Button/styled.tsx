import { IButton } from "components/types";
import styled from "styled-components";

export const ButtonStyled: React.FC<IButton> = styled.button<IButton>`
  border-radius: 0.25em;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: all 0.2s;
  ${({ theme, type }) => `
    background-color: ${theme.buttons[type].backgroundColor};
    color: ${theme.buttons[type].text};
    border: ${theme.buttons[type].border.default};
    &:hover {
      border: ${theme.buttons[type].border.hover};
      box-shadow: 0px 0px 1px 1px ${theme.buttons[type].border.shadowColor};
    }
  `}
`;
