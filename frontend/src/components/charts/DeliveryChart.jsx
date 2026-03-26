import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const DeliveryChart = ({ events }) => {
  const data = events.slice(0, 6).map((e, index) => ({
    name: `E${index + 1}`,
    delivered: e.status === "delivered" ? 1 : 0,
  }));

  return (
    <LineChart width={400} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="delivered" />
    </LineChart>
  );
};

export default DeliveryChart;