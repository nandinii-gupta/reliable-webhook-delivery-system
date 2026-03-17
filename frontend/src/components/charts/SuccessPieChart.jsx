import { useContext } from "react";
import { WebhookContext } from "../../context/WebhookContext";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

const SuccessPieChart = () => {
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
      <PieChart>
        <Pie data={data} dataKey="value" outerRadius={90} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SuccessPieChart;