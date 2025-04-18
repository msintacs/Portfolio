import apiClient from "../../../api/index";

export const getLottoLastWinNum = async () => {
  const res = await apiClient.get("/lotto/last");
  return res.data;
};
