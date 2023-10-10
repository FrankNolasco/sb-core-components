import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const InputText = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return <input {...props} />;
};
