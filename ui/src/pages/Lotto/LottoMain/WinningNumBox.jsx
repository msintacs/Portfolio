import React, { useState } from "react";

function WinningNumBox() {
  /* eslint-disable no-unused-vars */
  const [winNum, setWinNum] = useState([]);
  const [bonusNum, setBonusNum] = useState(0);
  /* eslint-disable no-unused-vars */

  const imsi = [6, 12, 23, 34, 43, 45];

  const winNumColor = (num) => {
    if (num <= 10) {
      return "border-yellow-500";
    }
    if (num > 10 && num <= 20) {
      return "border-cyan-500";
    }
    if (num > 20 && num <= 30) {
      return "border-red-500";
    }
    if (num > 30 && num <= 40) {
      return "border-gray-500";
    }
    if (num > 40) {
      return "border-green-500";
    }
    return null;
  };

  return (
    <div className="w-fit">
      <div className="pb-2">
        <select>
          <option> 제 100 회차</option>
        </select>
      </div>
      <div className="pb-0.5 pe-0.5 text-end text-xs text-gray-500">BONUS</div>
      <div className="flex items-center text-xl font-bold">
        {imsi.map((item) => (
          <span
            className={`mr-2 flex h-12 w-12 items-center justify-center rounded-full border-[3.1px] text-center ${winNumColor(item)}`}
            key={item}
          >
            {item}
          </span>
        ))}
        <span className="mx-3 font-bold text-gray-400">+</span>
        <span className="ml-2 flex h-12 w-12 items-center justify-center rounded-full border-[3.1px] border-blue-600 text-center">
          {bonusNum}
        </span>
      </div>
    </div>
  );
}

export default WinningNumBox;
