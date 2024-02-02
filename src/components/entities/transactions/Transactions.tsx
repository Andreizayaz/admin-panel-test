import { FC, ReactElement } from "react";
import { Diagram, Heading, Table } from "src/components/shared";

import "./Transactions.scss";
import { useTransactions } from "./hooks";
import { DIAGRAM_HEADING, TABLE_HEADING, headings } from "./helpers/consts";

type TransactionsPropsTypes = {
  email: string;
  closeHandler: (b: boolean) => void;
};

export const Transactions: FC<TransactionsPropsTypes> = ({
  email,
  closeHandler,
}): ReactElement => {
  const { modTransactions } = useTransactions();
  return (
    <div className="transactions">
      <div className="top">
        <Heading heading={email} classes="tr-heading" />
        <button
          className="close-btn"
          onClick={() => closeHandler(true)}
        ></button>
      </div>
      <Diagram
        diagramHeading={DIAGRAM_HEADING}
        chartTitle={email}
        headingClasses="tr-heading mb-20"
        chartTitleClasses="chart-title"
      />
      <Heading heading={TABLE_HEADING} classes="tr-heading table-heading" />
      <Table
        data={modTransactions}
        keyForIterate="transactionData"
        headings={headings} tableClasses="tr-table"

      />
    </div>
  );
};
