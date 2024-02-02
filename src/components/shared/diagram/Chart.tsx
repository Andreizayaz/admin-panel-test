import { FC, ReactElement } from "react";
import { Pie } from "react-chartjs-2";

type ChartPropsTypes = {
  chartTitle: string;
  chartData: any;
};

export const CustomChart: FC<ChartPropsTypes> = ({
  chartData,
  chartTitle,
}): ReactElement => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `${chartTitle}`,
            },
          },
        }}
      />
    </div>
  );
};
