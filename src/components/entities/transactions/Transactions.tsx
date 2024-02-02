import { FC, ReactElement } from "react";
import { Diagram, Heading, Table } from "src/components/shared";

import "./Transactions.scss";
import { useTransactions } from "./hooks";
import { DIAGRAM_HEADING, TABLE_HEADING, headings } from "./helpers/consts";

type TransactionsPropsTypes = {
  email: string;
};

export const Transactions: FC<TransactionsPropsTypes> = ({email}): ReactElement => {
  const { modTransactions } = useTransactions();
  return (
    <div className="transactions">
      <Heading heading={email} />
      <Diagram diagramHeading={DIAGRAM_HEADING} />
      <Heading heading={TABLE_HEADING} />
      <Table
        data={modTransactions}
        keyForIterate="transactionData"
        headings={headings}
      />
    </div>
  );
};
