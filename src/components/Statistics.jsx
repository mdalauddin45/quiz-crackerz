import React from "react";
import { useLoaderData } from "react-router-dom";
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
  const loaderData = useLoaderData();
  const data = loaderData.data;
  return (
    <div className="container md:px-0 md:py-0 lg:px-10 lg:py-6 mx-auto  mt-28 mb-28 lg:mb-60">
      <BarChart width={450} height={250} data={data}>
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
