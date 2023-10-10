import { Radio as RadioComponent, RadioGroupProps, RadioProps } from "antd";

export const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  return <RadioComponent.Group {...props}>{children}</RadioComponent.Group>;
};

const Radio = (props: RadioProps) => {
  return <RadioComponent {...props} />;
};

export default Radio;
