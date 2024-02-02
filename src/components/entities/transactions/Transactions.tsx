import { FC, ReactElement } from "react";
import { Diagram, Heading, Table } from "src/components/shared";

import "./Transactions.scss";
import { useTransactions } from "./hooks";

export const Transactions: FC = (): ReactElement => {
  useTransactions();
  return (
    <div className="transactions">
      <Heading heading="" />
      <Diagram diagramHeading="" />
      <Heading heading="" />
      {/* <Table data={} /> */}
    </div>
  );
};
