import apiClient from "../../../api/index";

export const getLottoLastWinNum = async () => {
  const res = await apiClient.get("/lotto/last");
  return res.data;
};

export const getRecentWinNum = async () => {
  const res = await apiClient.get("/lotto/recent");
  return res.data;
};

export const getTop10Num = async () => {
  const res = await apiClient.get("/lotto/top10");
  return res.data;
};

export const getNumRangeDistribution = async () => {
  const res = await apiClient.get("/lotto/numrange");
  return res.data;
};

export const putExcelWinNum = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await apiClient.post("/lotto/excel/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
