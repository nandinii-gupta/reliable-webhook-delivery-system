import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 20 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 40 },
  { day: "Thu", value: 50 },
  { day: "Fri", value: 65 },
];

const DeliveryChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="day" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DeliveryChart;
