import { FC, ReactElement } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartPropsTypes = {
  chartTitle: string;
  chartTitleClasses: string;
  chartData: any;
};

export const CustomChart: FC<ChartPropsTypes> = ({
  chartData,
  chartTitleClasses,
  chartTitle,
}): ReactElement => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
      <h4 className={chartTitleClasses}>{chartTitle}</h4>
    </div>
  );
};
