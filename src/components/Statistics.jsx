import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "React",
      total: 8,
      id: 1,
    },
    {
      name: "javaScript",
      total: 9,
      id: 2,
    },
    {
      name: "CSS",
      total: 8,
      id: 3,
    },
    {
      name: "Git",
      total: 11,
      id: 4,
    },
  ];

  return (
    <div className="">
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="id" fill="#8884d8" />
        <Bar dataKey="total" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Statistics;
