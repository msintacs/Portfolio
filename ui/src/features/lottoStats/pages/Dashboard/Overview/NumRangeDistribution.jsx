import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import useAsync from "../../../../../hooks/useAsync";
import { getNumRangeDistribution } from "../../../service/Lotto";

function NumRangeDistribution() {
  const { loading, data } = useAsync(getNumRangeDistribution, []);

  const COLORS = ["#fcc419", "#4dabf7", "#f03e3e", "#212529", "#40c057"];

  if (loading) return <CircularProgress />;

  const distributionData = data.data.results;

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800">번호 대역별 분포</h2>
      <div className="flex items-center justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="count"
              label={({ numRange, percent, value }) =>
                `[${numRange}] ${(percent * 100).toFixed(0)}% (${value})`
              }
            >
              {distributionData.map((entry, index) => (
                <Cell
                  key={entry.numRange}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default NumRangeDistribution;
