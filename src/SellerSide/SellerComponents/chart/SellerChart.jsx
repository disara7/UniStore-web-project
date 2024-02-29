import React from "react";
import "./SellerChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", Earn: "300" },
  { month: "Feb", Earn: "600" },
  { month: "Mar", Earn: "100" },
  { month: "Apr", Earn: "400" },
  { month: "May", Earn: "700" },
  { month: "Jun", Earn: "300" },
  { month: "Jul", Earn: "500" },
  { month: "Aug", Earn: "600" },
  { month: "Sep", Earn: "200" },
  { month: "Oct", Earn: "300" },
  { month: "Nov", Earn: "400" },
  { month: "Dec", Earn: "600" },
];

const SellerChart = () => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Earn"
            stroke="#3771C8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SellerChart;
