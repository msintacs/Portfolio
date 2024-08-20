import React, { useEffect, useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import { customGetDay, getTime, getAmpm } from "../../../utils/DateUtils";

/**
 * @returns 각 복권의 종류 별 마감시간 알람 컴포넌트
 */
function EndTimeAlarm({ LottoType }) {
  // 시간객체 변수
  const [time, setTime] = useState(new Date());
  const [isDeadLine, setIsDeadLine] = useState(false);

  // 날짜
  const today = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} `;
  const day = customGetDay(time.getDay(), "short");

  // 현재 시간 Interval
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // 현재시간
  const now = getTime(time.getHours(), time.getMinutes(), time.getSeconds());
  const ampm = getAmpm(time.getHours());

  /**
   * 복권 종료까지 남은 시간 구하기
   */
  const currentDay = time.getDay();
  const currentHours = time.getHours();
  const targetDay = LottoType === 1 ? 6 : 4;
  const targetHours = LottoType === 1 ? 20 : 17;

  let leftDay = targetDay - currentDay;
  let leftHours = targetHours - currentHours - 1;
  let leftMinutes = 60 - time.getMinutes();
  let leftSeconds = 60 - time.getSeconds();

  if (leftDay < 0) {
    leftDay = 7 - Math.abs(leftDay);
  }

  if (leftHours < 0) {
    leftHours = 24 - Math.abs(leftHours);
  }

  if (leftMinutes === 60) {
    leftMinutes = 0;
  }

  if (leftSeconds === 60) {
    leftSeconds = 0;
  }

  if (leftDay < 1 && leftHours < 1) {
    setIsDeadLine(true);
  }

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div>
      <div className="w-full pb-2 ps-2 text-sm text-neutral-400">{`${today} (${day})`}</div>
      <div className="flex w-full font-SUIT-Heavy text-5xl text-neutral-400">
        <span className="pe-4 tabular-nums">{now}</span>
        <span>{ampm}</span>
      </div>
      <div
        className={`ps-1 pt-2 text-xl ${isDeadLine ? "text-red-500" : "text-teal-400"} flex items-center tabular-nums`}
      >
        <div className="me-3">
          {`${leftDay}일 ${formatTime(leftHours)}:${formatTime(leftMinutes)}:${formatTime(leftSeconds)} 후 마감`}
        </div>
        <a
          href="https://dhlottery.co.kr/common.do?method=main"
          target="_blank"
          rel="noreferrer"
          className="flex items-center rounded-full border-2 border-teal-400 px-2 py-1 text-xs"
        >
          <span className="pe-1 font-bold">
            <LinkIcon />
          </span>
          <span className="font-bold">구매하러가기</span>
        </a>
      </div>
    </div>
  );
}

export default EndTimeAlarm;
