import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({
  chartData,
}: {
  chartData: Array<number>;
}) {
  const data = {
    labels: [
      "Income Tax",
      "National Insurance",
      "Student Loan",
      "Pension",
      "Rent",
      "Bills",
      "Subscriptions",
      "Savings",
      "Remaining",
    ],
    datasets: [
      {
        label: "Monthly Breakdown",
        data: chartData,
        backgroundColor: [
          "#DF3600",
          "#F44D71",
          "#e89bac",
          "#9c9c9c",
          "#36A2EB",
          "#845ae0",
          "#d98e43",
          "#ffcd56",
          "#5CC25A",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} />;
}
