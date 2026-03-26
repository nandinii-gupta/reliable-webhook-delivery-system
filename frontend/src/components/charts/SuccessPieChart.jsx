import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#22c55e", "#ef4444", "#f59e0b"];

const SuccessPieChart = ({ events }) => {

  const delivered = events.filter(e => e.status === "delivered").length;
  const failed = events.filter(e => e.status === "failed").length;
  const pending = events.filter(e => e.status === "pending").length;

  const data = [
    { name: "Delivered", value: delivered },
    { name: "Failed", value: failed },
    { name: "Pending", value: pending },
  ];

  return (
    <PieChart width={280} height={240}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
};

export default SuccessPieChart;