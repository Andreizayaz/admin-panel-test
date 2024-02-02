import { FC, ReactElement } from "react";

import "./Heading.scss";

type HeadingPropsTypes = {
  heading: string;
  classes?: string;
};

export const Heading: FC<HeadingPropsTypes> = ({
  heading,
  classes,
}): ReactElement => <h2 className={`heading ${classes ?? ""}`}>{heading}</h2>;
