import { theme } from "Theme";
import { ILabel, ITypography } from "components/types";

export const Typography: React.FC<ITypography> = ({
  children,
  style,
  color = "inherit",
  variant = "span",
  size = "md",
  fw = "normal",
  center,
  ...rest
}) => {
  return (
    <span
      style={{
        color,
        fontWeight: fw,
        fontSize: theme.fonts.sizes[variant][size],
        textAlign: center ? "center" : "inherit",
        fontFamily: theme.fonts.fontFamily,
        margin: 0,
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
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

export const Label: React.FC<ILabel> = ({
  children,
  style,
  color = "inherit",
  size = "md",
  fw = "normal",
  center,
  ...rest
}) => {
  return (
    <label
      style={{
        color,
        fontWeight: fw,
        fontSize: theme.fonts.sizes["label"][size],
        textAlign: center ? "center" : "inherit",
        fontFamily: theme.fonts.fontFamily,
        margin: 0,
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </label>
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
