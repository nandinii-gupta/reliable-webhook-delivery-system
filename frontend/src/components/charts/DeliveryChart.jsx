import { useContext } from "react";
import { WebhookContext } from "../../context/WebhookContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DeliveryChart = () => {
  const { events } = useContext(WebhookContext);

  const delivered = events.filter(e => e.status === "delivered").length;
  const failed = events.filter(e => e.status === "failed").length;
  const pending = events.filter(e => e.status === "pending").length;

  const data = [
    { name: "Delivered", value: delivered },
    { name: "Failed", value: failed },
    { name: "Pending", value: pending },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DeliveryChart;
