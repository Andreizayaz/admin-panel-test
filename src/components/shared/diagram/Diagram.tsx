import { FC, ReactElement } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { CustomChart } from "./Chart";

import { Heading } from "../heading";

type DiagramPropsTypes = {
  diagramHeading: string;
  chartTitle: string;
  chartTitleClasses: string;
  headingClasses?: string;
  chartData: any;
};

export const Diagram: FC<DiagramPropsTypes> = ({
  diagramHeading,
  chartTitle,
  chartTitleClasses,
  headingClasses,
  chartData,
}): ReactElement => {
  Chart.register(CategoryScale);

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
