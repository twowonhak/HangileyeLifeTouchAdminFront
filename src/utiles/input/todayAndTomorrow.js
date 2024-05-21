/*
  오늘 내일 다른날 확인
 */

export default function todayAndTomorrow(date) {

  let todate = new Date(date.substring(0, 4), date.substring(4, 6) - 1, date.substring(6, 8)); // 월은 0부터 시작하므로 3월은 2로 표기

  // 현재 날짜 객체 생성
  const currentDate = new Date();

  // 오늘 날짜 객체 생성
  const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  // 내일 날짜 객체 생성
  const tomorrow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

  // 주어진 날짜와 비교하여 오늘인지 내일인지 확인
  if (todate.toDateString() === today.toDateString()) {
    return "today"
  } else if (todate.toDateString() === tomorrow.toDateString()) {
    return "tomorrow"
  } else {
    return "other"
  }
}