import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CircularProgress from "@mui/material/CircularProgress";
import { getTop10Num } from "../../../service/Lotto";
import useAsync from "../../../../../hooks/useAsync";

function NumTopTen() {
  /* 번호별 출혈 빈도 TOP 10 */
  const { loading, data } = useAsync(getTop10Num, []);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-gray-800">
        번호별 출현 빈도 (TOP 10)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.data.results}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="number" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="frequency"
            fill="#8884d8"
            radius={[4, 4, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default NumTopTen;
