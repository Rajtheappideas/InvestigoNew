import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";
import { PieChart, Pie } from "recharts";
import img from "../../assets/images/analytics.png";

const ProjectsChart = () => {
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
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
          <h5>Total Projects</h5>
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "auto" }}>
          <input type="date" style={{ width: "100%" }} />
          <DotsHorizontalIcon style={{ width: "3rem", height: "3rem" }} />
        </div>
      </div>
      <PieChart width={750} height={250}>
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </>
  );
};

export default ProjectsChart;
