import { useContext } from "react";
import { WebhookContext } from "../../context/WebhookContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RetryChart = () => {
  const { events } = useContext(WebhookContext);

  const retryBuckets = {
    "0": 0,
    "1": 0,
    "2+": 0,
  };

  events.forEach(e => {
    if (e.retries === 0) retryBuckets["0"]++;
    else if (e.retries === 1) retryBuckets["1"]++;
    else retryBuckets["2+"]++;
  });

  const data = [
    { name: "0 Retries", value: retryBuckets["0"] },
    { name: "1 Retry", value: retryBuckets["1"] },
    { name: "2+ Retries", value: retryBuckets["2+"] },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#f59e0b" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RetryChart;