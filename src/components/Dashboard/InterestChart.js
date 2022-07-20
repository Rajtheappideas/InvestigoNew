import { DotsHorizontalIcon } from "@heroicons/react/outline";
import img from "../../assets/images/interest.png";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const InterestChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
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
          <h5>Total Interest</h5>
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "auto" }}>
          <select style={{ marginRight: "2rem" }}>
            <option label="packages"></option>
            <option>Classic 250</option>
            <option>Elite 500</option>
            <option>Premium 1000</option>
            <option>Ultimate 5000+</option>
          </select>
          <input type="date" style={{ width: "100%" }} />
          <DotsHorizontalIcon style={{ width: "3rem", height: "3rem" }} />
        </div>
      </div>
      <LineChart
        width={730}
        height={250}
        data={data}
        className="pt-5"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

export default InterestChart;
