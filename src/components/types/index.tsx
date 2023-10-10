import React from "react";

export interface IBox {
  width?: string | number;
  padding?: string | number;
  margin?: string | number;
  border?: string | number;
  responsive?: boolean;
  height?: string | number;
  addShadow?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface IDispSelect {
  type: "grid" | "flex" | "column" | "row" | "row-wrap" | undefined;
  gap?: string;
  cols?: number;
  children?: React.ReactNode;
}

export interface IFlex extends IBox {
  justify?: string;
  items?: string;
  self?: string;
  content?: string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string | number;
}

export interface IGrid extends IBox {
  cols?: number;
  gap?: string | number;
}

export interface IGridChild extends IBox {
  span?: number;
  spanRow?: number;
  spanCol?: number;
}

export interface IButton {
  children?: React.ReactNode;
  icon?: React.ReactNode | string;
  type:
    | "default"
    | "primary"
    | "link"
    | "ghost"
    | "danger"
    | "warn"
    | "success"
    | "dark";
}

export type T_Typography =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "label"
  | "p";
export interface ITypography {
  variant?: T_Typography;
  size?: "sm" | "lg" | "md";
  fw?: string;
  color?: string;
  center?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
