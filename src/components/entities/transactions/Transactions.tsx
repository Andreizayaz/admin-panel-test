import { FC, ReactElement } from "react";
import { Diagram, Heading, Table } from "src/components/shared";

import "./Transactions.scss";

export const Transactions: FC = (): ReactElement => {
  return (
    <div className="transactions">
      <Heading heading="" />
      <Diagram diagramHeading="" />
      <Heading heading="" />
      {/* <Table data={[]} /> */}
    </div>
  );
};
