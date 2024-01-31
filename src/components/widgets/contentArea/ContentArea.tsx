import { FC, ReactElement } from "react";

import "./ContentArea.scss";
import { Heading } from "components/shared";
import { HEADING } from "./helpers/consts";
import { Users } from "components/entities";

export const ContentArea: FC = (): ReactElement => (
  <main className="content-area">
    <Heading heading={HEADING} classes="border-bottom" />
    <Users />
  </main>
);
