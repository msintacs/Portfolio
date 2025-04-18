/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  value: 0,
};

// createSlice 호출
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// 각 리듀서에 해당하는 액션 생성자들을 export (컴포넌트에서 사용)
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 슬라이스의 리듀서 자체를 export (스토어 설정 시 사용)
export default counterSlice.reducer;
