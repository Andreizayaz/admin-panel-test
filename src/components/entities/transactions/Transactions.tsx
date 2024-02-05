import { FC, ReactElement } from "react";
import { Diagram, Heading, Table } from "src/components/shared";

import "./Transactions.scss";
import { useDiagram, useTransactions } from "./hooks";
import { DIAGRAM_HEADING, TABLE_HEADING, headings } from "./helpers/consts";

type TransactionsPropsTypes = {
  email: string;
};

export const Transactions: FC<TransactionsPropsTypes> = ({
  email,
}): ReactElement => {
  const { modTransactions } = useTransactions();
  const { chartData } = useDiagram();
  return (
    <div className="transactions">
      <div className="top">
        <Heading heading={email} classes="tr-heading" />
        <button
          className="close-btn"
        ></button>
      </div>
      <Diagram
        diagramHeading={DIAGRAM_HEADING}
        chartTitle={email}
        headingClasses="tr-heading mb-20"
        chartTitleClasses="chart-title"
        chartData={chartData}
      />
      <Heading heading={TABLE_HEADING} classes="tr-heading table-heading" />
      <Table
        data={modTransactions}
        keyForIterate="transactionData"
        headings={headings}
        tableClasses="tr-table"
      />
    </div>
  );
};
