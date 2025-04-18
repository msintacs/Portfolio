import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  // useSelector 로 스토어 상태에서 필요한 데이터 가져오기
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment Value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement Value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
    </div>
  );
}
