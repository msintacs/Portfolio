import { useState, useEffect, useCallback } from "react";

function useAsync(asyncCallback, deps = [], skip = false) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // useCallback: deps 배열의 값이 변경될 때만 함수를 재생성
  const fetchData = useCallback(async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const res = await asyncCallback(...args);
      setData(res);
      return res;
    } catch (e) {
      setError(e);
      setData(null);
      throw e;
    } finally {
      setLoading(false);
    }
  }, deps);

  useEffect(() => {
    if (skip) {
      setLoading(false);
      setError(null);
      setData(null);
      return;
    }

    fetchData();
  }, [skip, fetchData]);

  return { loading, error, data, reFetch: fetchData };
}

export default useAsync;
