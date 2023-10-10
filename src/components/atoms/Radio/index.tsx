import { Row } from "components/skeleton/Flex";
import { Label } from "../Typography";

export interface IRadio {
  name: string;
  options: { id?: string; value: string | number; name: string }[];
  defaultValue?: string;
}

export const Radio: React.FC<IRadio> = ({ options, defaultValue }) => {
  return (
    <Row gap="5px">
      {options.map((el) => {
        return (
          <Row items="center" self="flex-start">
            <input
              type="radio"
              id={el.id}
              defaultChecked={defaultValue === el.name}
              defaultValue={defaultValue}
              name="genero"
              value={el.value}
            />
            <Label htmlFor={el.id}>{el.name}</Label>
          </Row>
        );
      })}
      <br />
    </Row>
  );
};
