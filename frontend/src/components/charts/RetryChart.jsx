import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const RetryChart = ({ events }) => {

  const data = events.slice(0, 6).map((e, index) => ({
    name: `E${index + 1}`,
    retries: e.retries || 0,
  }));

  return (
    <BarChart width={400} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="retries" fill="#dfa94a" />
    </BarChart>
  );
};

export default RetryChart;