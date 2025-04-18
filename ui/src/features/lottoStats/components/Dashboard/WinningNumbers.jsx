import React, { useEffect, useState } from "react";
import { getLottoLastWinNum } from "../../service/Lotto";

function WinningNumbers({ lottoKind }) {
  const [lottoData, setLottoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (lottoKind === 1) {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const data = await getLottoLastWinNum();
          console.log("fetched data: ", data);
          setLottoData(data);
        } catch (err) {
          console.error("Data Loading Fail: ", err);
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    } else {
      console.log("Lotto 720 입니다.");
      setLottoData(null);
    }
  }, [lottoKind]);

  return (
    <div className="3xl:max-w-8xl mx-auto max-w-6xl">
      <div className="rounded-xl bg-white p-6 shadow-md">
        <p className="text-sm font-medium text-gray-500">최신 회차 당첨 번호</p>
      </div>
    </div>
  );
}

export default WinningNumbers;
