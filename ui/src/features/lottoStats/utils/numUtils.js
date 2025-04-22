import React from "react";

export const printNumbers = (num) => {
  let bgColor = "";

  if (num <= 9 && num >= 1) {
    bgColor = "bg-red-500";
  } else if (num <= 19 && num >= 10) {
    bgColor = "bg-blue-400";
  } else if (num <= 29 && num >= 20) {
    bgColor = "bg-orange-500";
  } else if (num <= 39 && num >= 30) {
    bgColor = "bg-gray-400";
  } else {
    bgColor = "bg-green-500";
  }

  return (
    <div
      key={num}
      className={`flex h-9 w-9 items-center justify-center rounded-full text-lg text-white ${bgColor}`}
    >
      {num}
    </div>
  );
};

export const convertNumtoArray = (num1, num2, num3, num4, num5, num6) => {
  let numbers = [];
  numbers = [num1, num2, num3, num4, num5, num6];

  return numbers;
};
