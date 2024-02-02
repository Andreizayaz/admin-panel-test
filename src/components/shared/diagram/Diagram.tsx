import { FC, ReactElement, useState } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./temp";
import { CustomChart } from "./Chart";

import { Heading } from "../heading";

type DiagramPropsTypes = {
  diagramHeading: string;
  data?: any[];
};

export const Diagram: FC<DiagramPropsTypes> = ({
  diagramHeading,
  data = Data,
}): ReactElement => {
  Chart.register(CategoryScale);
  const [chartData, setChartData] = useState({
    labels: data.map((item) => item.year),
    datasets: [
      {
        label: "Users Gained ",
        data: data.map((item) => item.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="diagram">
      <Heading heading={diagramHeading} />
      <CustomChart chartData={chartData} chartTitle={diagramHeading} />
    </div>
  );
};
