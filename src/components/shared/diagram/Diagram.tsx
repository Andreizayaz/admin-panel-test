import { FC, ReactElement, useState } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./temp";
import { CustomChart } from "./Chart";

import { Heading } from "../heading";
import { useSelector } from "react-redux";
import { selectTransactions } from "src/components/entities/transactions/store";

type DiagramPropsTypes = {
  diagramHeading: string;
  chartTitle: string;
  chartTitleClasses: string;
  headingClasses?: string;
  data?: any[];
};

export const Diagram: FC<DiagramPropsTypes> = ({
  diagramHeading,
  chartTitle,
  chartTitleClasses,
  headingClasses,
  data = Data,
}): ReactElement => {
  Chart.register(CategoryScale);
  const transactions = useSelector(selectTransactions);

  const [chartData, setChartData] = useState({
    labels: transactions?.map(
      ({ transactionData: { created_at } }) => new Date(created_at).toLocaleTimeString()
    ),
    datasets: [
      {
        data: transactions?.map(({transactionData:{amount}}) => amount),
        borderColor: "#1C64F2",
        borderWidth: 2,
        pointStyle: false,
      },
    ],
  });
  return (
    <div className="diagram">
      <Heading heading={diagramHeading} classes={headingClasses} />
      <CustomChart
        chartData={chartData}
        chartTitle={chartTitle}
        chartTitleClasses={chartTitleClasses}
      />
    </div>
  );
};
