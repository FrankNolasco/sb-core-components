import { ITypography } from "components/types";
import { TypographyStyled } from "./styled";
import { theme } from "Theme";

export const Typography: React.FC<ITypography> = ({ children, ...rest }) => {
  return (
    <TypographyStyled myTheme={theme} {...rest}>
      {children}
    </TypographyStyled>
  );
};

export const H1: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h1",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H2: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h2",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H3: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h3",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H4: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h4",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H5: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h5",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H6: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h6",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const Span: React.FC<ITypography> = ({
  children,
  variant = "span",
  ...rest
}) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export const Label: React.FC<ITypography> = ({
  children,
  variant = "label",
  ...rest
}) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export const P: React.FC<ITypography> = ({
  children,
  variant = "p",
  ...rest
}) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};
