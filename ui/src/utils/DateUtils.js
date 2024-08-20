export function customGetDay(day, type) {
  const weekFull = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const weekShort = ["일", "월", "화", "수", "목", "금", "토"];

  let result = "";

  if (type === "full") {
    result = weekFull[day];
  } else {
    result = weekShort[day];
  }

  return result;
}

export function getAmpm(hours) {
  const ampm = hours >= 12 ? "PM" : "AM";
  return ampm;
}

export function getTime(hours, minutes, seconds) {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${hours}:${formattedMinutes}:${formattedSeconds}`;
}
