import { FC, FormEvent, ReactElement } from "react";

import "./Input.scss";

type InputPropsTypes = {
  placeholder: string;
  classes?: string;
  inputHandler: (e: FormEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputPropsTypes> = ({
  placeholder,
  classes,
  inputHandler,
}): ReactElement => (
  <input
    placeholder={placeholder}
    className={`input ${classes}`}
    onInput={(e) => inputHandler(e)}
  />
);
