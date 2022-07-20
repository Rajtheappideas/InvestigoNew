import { DotsHorizontalIcon } from "@heroicons/react/outline";
import img from "../../assets/images/cash.png";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const InvestmentChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={img}
            style={{ height: "3rem", width: "3rem", marginRight: "1rem" }}
          />
          <h5>Total Investment</h5>
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "auto" }}>
          <input type="date" style={{ width: "100%" }} />
          <DotsHorizontalIcon style={{ width: "3rem", height: "3rem" }} />
        </div>
      </div>
      {/* <ResponsiveContainer></ResponsiveContainer> */}
      <BarChart width={800} className="pt-5" height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default InvestmentChart;
