import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", retries: 5 },
  { day: "Tue", retries: 8 },
  { day: "Wed", retries: 3 },
  { day: "Thu", retries: 10 },
  { day: "Fri", retries: 6 }
];

const RetryChart = () => {
  return (
    <div className="chart-card">
      

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="retries" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RetryChart;