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
    <div className=" container text-center max-w-xl p-8 shadow-sm lg:p-12  dark:text-gray-900">
      <div className=" w-full">
        <BarChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="id" fill="#8884d8" />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
